import sharp from "sharp";
import { readdirSync, statSync, existsSync } from "fs";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../public");

// Recursively find all images
function findImages(dir) {
    const results = [];
    for (const file of readdirSync(dir)) {
        const full = join(dir, file);
        const stat = statSync(full);
        if (stat.isDirectory()) {
            results.push(...findImages(full));
        } else {
            const ext = extname(file).toLowerCase();
            if ([".jpg", ".jpeg", ".png"].includes(ext)) {
                results.push(full);
            }
        }
    }
    return results;
}

const images = findImages(publicDir);
let saved = 0;
let count = 0;

for (const imgPath of images) {
    const ext = extname(imgPath).toLowerCase();
    const outPath = imgPath.replace(new RegExp(`\\${ext}$`, "i"), ".webp");
    const sizeBefore = statSync(imgPath).size;

    // Skip logo.png - keep as PNG since it may need transparency for branding
    if (basename(imgPath) === "logo.png") {
        console.log(`⏭  Skipping logo.png (branding asset)`);
        continue;
    }

    try {
        await sharp(imgPath)
            .webp({ quality: 80, effort: 6 })
            .toFile(outPath);

        const sizeAfter = statSync(outPath).size;
        const savedKB = Math.round((sizeBefore - sizeAfter) / 1024);
        saved += sizeBefore - sizeAfter;
        count++;
        console.log(
            `✅ ${basename(imgPath)} → ${basename(outPath)} | ${Math.round(sizeBefore / 1024)}KB → ${Math.round(sizeAfter / 1024)}KB (saved ${savedKB}KB)`
        );
    } catch (err) {
        console.error(`❌ Failed: ${imgPath}`, err.message);
    }
}

console.log(
    `\n🎉 Done! Converted ${count} images, saved ${Math.round(saved / 1024)}KB total`
);
