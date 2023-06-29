const stockNames = [
   // A
   "Apple Inc.",
   "Amazon.com Inc.",
   "Alphabet Inc.",
   "AbbVie Inc.",
   "Adobe Inc.",
   "AT&T Inc.",
   "American Express Company",

   // B
   "Bank of America Corporation",
   "Boeing Company",
   "Berkshire Hathaway Inc.",
   "Biogen Inc.",
   "BlackRock Inc.",
   "Bristol-Myers Squibb Company",
   "Booking Holdings Inc.",

   // C
   "Citigroup Inc.",
   "Caterpillar Inc.",
   "Chevron Corporation",
   "Cisco Systems Inc.",
   "Coca-Cola Company",
   "Comcast Corporation",
   "Costco Wholesale Corporation",

   // D
   "Disney (The Walt Disney Company)",
   "Dow Inc.",
   "DuPont de Nemours Inc.",
   "Danaher Corporation",
   "Deere & Company",
   "Dell Technologies Inc.",
   "Dollar General Corporation",

   // E
   "Exxon Mobil Corporation",
   "Electronic Arts Inc.",
   "Eli Lilly and Company",
   "eBay Inc.",
   "Ecolab Inc.",
   "Eaton Corporation plc",
   "Equifax Inc.",

   // F
   "Facebook Inc.",
   "Ford Motor Company",
   "FedEx Corporation",
   "Freeport-McMoRan Inc.",
   "Fortinet Inc.",
   "Fidelity National Information Services Inc.",
   "FirstEnergy Corp.",

   // G
   "Google (Alphabet Inc.)",
   "General Electric Company",
   "Goldman Sachs Group Inc.",
   "General Motors Company",
   "Gilead Sciences Inc.",
   "Global Payments Inc.",
   "General Dynamics Corporation",

   // H
   "Home Depot Inc.",
   "Honeywell International Inc.",
   "Hewlett Packard Enterprise Company",
   "Halliburton Company",
   "Hasbro Inc.",
   "Hilton Worldwide Holdings Inc.",
   "Humana Inc.",

   // I
   "Intel Corporation",
   "IBM (International Business Machines Corporation)",
   "Intuit Inc.",
   "Illumina Inc.",
   "Intercontinental Exchange Inc.",
   "Ingersoll Rand Inc.",
   "IAC/InterActiveCorp",

   // J
   "Johnson & Johnson",
   "JPMorgan Chase & Co.",
   "Jefferies Financial Group Inc.",
   "Johnson Controls International plc",
   "Jacobs Engineering Group Inc.",
   "Jabil Inc.",
   "JetBlue Airways Corporation",

   // K
   "The Coca-Cola Company",
   "The Kraft Heinz Company",
   "Kellogg Company",
   "Kimberly-Clark Corporation",
   "KLA Corporation",
   "Kroger Co.",
   "Kohl's Corporation",

   // L
   "Lockheed Martin Corporation",
   "Lowe's Companies Inc.",
   "Lilly (Eli Lilly and Company)",
   "Lumen Technologies Inc.",
   "L3Harris Technologies Inc.",
   "LyondellBasell Industries NV",
   "LabCorp (Laboratory Corporation of America Holdings)",

   // M
   "Microsoft Corporation",
   "Merck & Co. Inc.",
   "McDonald's Corporation",
   "Morgan Stanley",
   "Marathon Petroleum Corporation",
   "Marriott International Inc.",
   "MGM Resorts International",

   // N
   "Netflix Inc.",
   "Nike Inc.",
   "Novartis AG",
   "Norwegian Cruise Line Holdings Ltd.",
   "NVIDIA Corporation",
   "National Oilwell Varco Inc.",
   "NortonLifeLock Inc.",

   // O
   "Oracle Corporation",
   "Occidental Petroleum Corporation",
   "Otis Worldwide Corporation",
   "Owens Corning",
   "ONEOK Inc.",
   "Omnicom Group Inc.",
   "Old Dominion Freight Line Inc.",

   // P
   "Procter & Gamble Company",
   "Pfizer Inc.",
   "PNC Financial Services Group Inc.",
   "PayPal Holdings Inc.",
   "Parker-Hannifin Corporation",
   "PepsiCo Inc.",
   "Principal Financial Group Inc.",

   // Q
   "QUALCOMM Incorporated",
   "Qorvo Inc.",
   "Quest Diagnostics Incorporated",
   "Qurate Retail Inc.",
   "Quanta Services Inc.",
   "Quintiles IMS Holdings Inc.",
   "Quad/Graphics Inc.",

   // R
   "Raytheon Technologies Corporation",
   "Roche Holding AG",
   "Royal Caribbean Group",
   "Regeneron Pharmaceuticals Inc.",
   "Royal Dutch Shell plc",
   "Robert Half International Inc.",
   "Ralph Lauren Corporation",

   // S
   "Salesforce.com Inc.",
   "The Home Depot Inc.",
   "Starbucks Corporation",
   "Schlumberger Limited",
   "ServiceNow Inc.",
   "Sempra Energy",
   "Sysco Corporation",

   // T
   "Tesla Inc.",
   "Target Corporation",
   "T-Mobile US Inc.",
   "Texas Instruments Incorporated",
   "TJX Companies Inc.",
   "Twitter Inc.",
   "Tyson Foods Inc.",

   // U
   "Uber Technologies Inc.",
   "United Airlines Holdings Inc.",
   "UnitedHealth Group Incorporated",
   "Union Pacific Corporation",
   "United Parcel Service Inc.",
   "Under Armour Inc.",
   "Universal Health Services Inc.",

   // V
   "Visa Inc.",
   "Verizon Communications Inc.",
   "Valero Energy Corporation",
   "ViacomCBS Inc.",
   "Vertex Pharmaceuticals Incorporated",
   "VMware Inc.",
   "Ventas Inc.",

   // W
   "Walmart Inc.",
   "Walt Disney Company",
   "Wells Fargo & Company",
   "Walgreens Boots Alliance Inc.",
   "Western Digital Corporation",
   "Williams Companies Inc.",
   "Whirlpool Corporation",

   // X
   "Xilinx Inc.",
   "XPO Logistics Inc.",
   "Xcel Energy Inc.",
   "Xerox Holdings Corporation",
   "Xylem Inc.",
   "Xilinx Inc.",
   "XYL (Xylem Inc.)",

   // Y
   "Yahoo! Inc.",
   "Yum! Brands Inc.",
   "Yum China Holdings Inc.",
   "Yale (Yale University)",
   "Yandex N.V.",
   "Yum! China Holdings Inc.",
   "Yale (Yale University)",

   // Z
   "Zoetis Inc.",
   "Zions Bancorporation",
   "Zoetis Inc.",
   "Zoetis Inc.",
   "Zoom Video Communications Inc.",
   "Zimmer Biomet Holdings Inc.",
   "Zebra Technologies Corporation",
];

import { NextResponse } from "next/server";

export async function GET() {
   return NextResponse.json({ stockNames });
}

// Print the stock names assigned to each letter
// for (let i = 0; i < 182; i += 7) {
//    const letter = stockNames[i][0].toUpperCase();
//    const stocks = stockNames.slice(i, i + 7);
//    console.log(`Stocks starting with letter '${letter}':`, stocks);
// }
