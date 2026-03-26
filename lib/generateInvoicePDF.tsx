import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  renderToBuffer,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Helvetica",
  src: "Helvetica",
});

const colors = {
  saffron: "#FF9933",
  gold: "#FFD700",
  dark: "#1a1a2e",
  muted: "#555555",
  light: "#f9f6f0",
  border: "#e8d9c0",
  white: "#ffffff",
  green: "#22c55e",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: colors.dark,
    paddingBottom: 40,
  },
  // Header
  header: {
    backgroundColor: colors.dark,
    padding: "24px 32px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logo: {
    width: 52,
    height: 52,
    borderRadius: 8,
  },
  brandInfo: {
    flexDirection: "column",
  },
  brandName: {
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
    color: colors.gold,
    letterSpacing: 1,
  },
  brandTagline: {
    fontSize: 8,
    color: colors.saffron,
    marginTop: 2,
    letterSpacing: 0.5,
  },
  invoiceTag: {
    backgroundColor: colors.saffron,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  invoiceTagText: {
    color: colors.white,
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    letterSpacing: 1,
  },
  // Gold divider
  goldBar: {
    height: 4,
    backgroundColor: colors.gold,
  },
  // Main content
  body: {
    padding: "24px 32px",
  },
  // Booking ID badge
  bookingIdRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 16,
    borderBottom: `1px solid ${colors.border}`,
  },
  bookingIdLabel: {
    fontSize: 9,
    color: colors.muted,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  bookingId: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: colors.saffron,
    letterSpacing: 2,
  },
  statusBadge: {
    backgroundColor: "#dcfce7",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statusText: {
    color: "#15803d",
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  // Two-column layout
  twoCol: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 20,
  },
  col: {
    flex: 1,
    backgroundColor: colors.light,
    borderRadius: 8,
    padding: 14,
    border: `1px solid ${colors.border}`,
  },
  colTitle: {
    fontSize: 8,
    color: colors.saffron,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
    paddingBottom: 6,
    borderBottom: `1px solid ${colors.border}`,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },
  infoLabel: {
    color: colors.muted,
    fontSize: 9,
    flex: 1,
  },
  infoValue: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: colors.dark,
    flex: 2,
    textAlign: "right",
  },
  // Payment summary box
  paymentBox: {
    backgroundColor: colors.dark,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 9,
    color: colors.gold,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 12,
    paddingBottom: 8,
    borderBottom: `1px solid rgba(255,215,0,0.3)`,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  paymentLabel: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 9,
  },
  paymentValue: {
    color: colors.white,
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
  },
  paymentDivider: {
    height: 1,
    backgroundColor: "rgba(255,215,0,0.3)",
    marginVertical: 10,
  },
  depositRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  depositLabel: {
    color: colors.gold,
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  depositValue: {
    color: colors.gold,
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,153,51,0.15)",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  balanceLabel: {
    color: colors.saffron,
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
  },
  balanceValue: {
    color: colors.saffron,
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
  },
  // Important notes
  notesBox: {
    border: `1px solid ${colors.border}`,
    borderRadius: 8,
    padding: 14,
    marginBottom: 20,
    backgroundColor: "#fffbf0",
  },
  notesTitle: {
    fontSize: 9,
    color: colors.saffron,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  noteItem: {
    flexDirection: "row",
    marginBottom: 5,
    gap: 6,
  },
  noteDot: {
    color: colors.saffron,
    fontSize: 9,
    marginTop: 1,
  },
  noteText: {
    color: colors.muted,
    fontSize: 9,
    flex: 1,
    lineHeight: 1.4,
  },
  // Contact row
  contactBox: {
    backgroundColor: colors.light,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    border: `1px solid ${colors.border}`,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactTitle: {
    fontSize: 8,
    color: colors.saffron,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  contactValue: {
    fontSize: 9,
    color: colors.dark,
    marginBottom: 3,
  },
  // Footer
  footer: {
    borderTop: `2px solid ${colors.gold}`,
    paddingTop: 14,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 8,
    color: colors.muted,
  },
  footerBlessing: {
    fontSize: 10,
    color: colors.saffron,
    fontFamily: "Helvetica-Bold",
  },
});

interface InvoiceData {
  bookingId: string;
  name: string;
  email: string;
  phone: string;
  packageTitle: string;
  date: string;
  travelers: number;
  pricePerPerson: number;
  totalPackagePrice: number;
  depositPerPerson: number;
  totalDeposit: number;
  balanceDue: number;
  paymentId: string;
  createdAt: string;
}

function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const logoPath = `${process.cwd()}/public/logo.png`;

const InvoiceDocument: React.FC<{ data: InvoiceData }> = ({ data }) => (
  <Document title={`Booking Confirmation — ${data.bookingId}`}>
    <Page size="A4" style={styles.page}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} src={logoPath} />
          <View style={styles.brandInfo}>
            <Text style={styles.brandName}>BRAJ PATH PRADARSHAK</Text>
            <Text style={styles.brandTagline}>
              Sacred Braj Yatra Specialists · Est. Govardhan, U.P.
            </Text>
          </View>
        </View>
        <View style={styles.invoiceTag}>
          <Text style={styles.invoiceTagText}>BOOKING RECEIPT</Text>
        </View>
      </View>

      {/* Gold bar */}
      <View style={styles.goldBar} />

      {/* ── Body ── */}
      <View style={styles.body}>
        {/* Booking ID row */}
        <View style={styles.bookingIdRow}>
          <View>
            <Text style={styles.bookingIdLabel}>Booking Reference</Text>
            <Text style={styles.bookingId}>{data.bookingId}</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>✓ Confirmed</Text>
          </View>
        </View>

        {/* Two column: customer + tour */}
        <View style={styles.twoCol}>
          {/* Customer info */}
          <View style={styles.col}>
            <Text style={styles.colTitle}>Customer Details</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Name</Text>
              <Text style={styles.infoValue}>{data.name}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoValue}>{data.phone}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{data.email}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Payment ID</Text>
              <Text style={[styles.infoValue, { fontSize: 8, color: colors.muted }]}>
                {data.paymentId}
              </Text>
            </View>
          </View>

          {/* Tour info */}
          <View style={styles.col}>
            <Text style={styles.colTitle}>Tour Details</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Package</Text>
              <Text style={styles.infoValue}>{data.packageTitle}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Travel Date</Text>
              <Text style={styles.infoValue}>{formatDate(data.date)}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Travelers</Text>
              <Text style={styles.infoValue}>{data.travelers} person(s)</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Rate</Text>
              <Text style={styles.infoValue}>
                {formatINR(data.pricePerPerson)} / person
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Summary */}
        <View style={styles.paymentBox}>
          <Text style={styles.paymentTitle}>Payment Summary</Text>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Package Price</Text>
            <Text style={styles.paymentValue}>
              {formatINR(data.pricePerPerson)} × {data.travelers} person(s)
            </Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Total Package Price</Text>
            <Text style={styles.paymentValue}>
              {formatINR(data.totalPackagePrice)}
            </Text>
          </View>
          <View style={styles.paymentDivider} />
          <View style={styles.depositRow}>
            <Text style={styles.depositLabel}>
              ✓ Advance Deposit Paid ({formatINR(data.depositPerPerson)} × {data.travelers})
            </Text>
            <Text style={styles.depositValue}>
              {formatINR(data.totalDeposit)}
            </Text>
          </View>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceLabel}>
              Balance Due (pay guide on arrival)
            </Text>
            <Text style={styles.balanceValue}>{formatINR(data.balanceDue)}</Text>
          </View>
        </View>

        {/* Important Notes */}
        <View style={styles.notesBox}>
          <Text style={styles.notesTitle}>Important Notes</Text>
          {[
            "The advance deposit confirms your booking slot. Pay the remaining balance to your guide on the day of the tour.",
            "This receipt is valid proof of booking. Please show it to your guide at the meeting point.",
            "Cancellations made 48 hours or more before the tour date are eligible for a full deposit refund.",
            "Please be at the meeting point 10 minutes before your scheduled departure time.",
            "Carry a printed or digital copy of this receipt on the day of the tour.",
          ].map((note, i) => (
            <View key={i} style={styles.noteItem}>
              <Text style={styles.noteDot}>•</Text>
              <Text style={styles.noteText}>{note}</Text>
            </View>
          ))}
        </View>

        {/* Contact */}
        <View style={styles.contactBox}>
          <View>
            <Text style={styles.contactTitle}>Contact Us</Text>
            <Text style={styles.contactValue}>📞 +91-96395 91697 · +91-70781 17174</Text>
            <Text style={styles.contactValue}>✉  brajpathpradarshak@gmail.com</Text>
          </View>
          <View>
            <Text style={styles.contactTitle}>Address</Text>
            <Text style={styles.contactValue}>Govardhan, Mathura</Text>
            <Text style={styles.contactValue}>Uttar Pradesh — 281502</Text>
            <Text style={styles.contactValue}>www.brajpathpradarshak.com</Text>
          </View>
        </View>
      </View>

      {/* ── Footer ── */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Generated on{" "}
          {new Date(data.createdAt).toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </Text>
        <Text style={styles.footerBlessing}>Jai Shri Krishna 🙏</Text>
        <Text style={styles.footerText}>Booking ID: {data.bookingId}</Text>
      </View>
    </Page>
  </Document>
);

export async function generateInvoicePDF(data: InvoiceData): Promise<Buffer> {
  const pdfBuffer = await renderToBuffer(<InvoiceDocument data={data} />);
  return pdfBuffer;
}
