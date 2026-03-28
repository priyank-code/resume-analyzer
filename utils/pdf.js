import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

const extractText = async (fileBuffer) => {
  try {
    const data = new Uint8Array(fileBuffer);
    const pdf = await pdfjsLib.getDocument({ data }).promise;

    let text = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map(item => item.str);
      text += strings.join(" ") + " ";
    }

    return text;
  } catch (error) {
    console.error("PDF Extract Error:", error.message);
    throw new Error("Failed to extract PDF");
  }
};

export default extractText;