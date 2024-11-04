
function getSpecificValueFromDocument(documentId, keyword) {
    const doc = DocumentApp.openById(documentId);
    const text = doc.getBody().getText();
    const regex = new RegExp(`${keyword}\\s*(\\S+)`, "g");
    const matches = [];
    
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }
  
    return matches;
  }
  

  function getHeadingAndBodyFromDocument(documentId) {
    const doc = DocumentApp.openById(documentId);
    const body = doc.getBody();
    const numChildren = body.getNumChildren();
    const result = [];
    
    let captureBody = false;
    let currentHeading = null;
  
    for (let i = 0; i < numChildren; i++) {
      const element = body.getChild(i);
  
      if (element.getType() === DocumentApp.ElementType.PARAGRAPH) {
        const paragraph = element.asParagraph();
        const text = paragraph.getText();
  
        if (paragraph.getHeading() === DocumentApp.ParagraphHeading.HEADING3) {
          if (currentHeading && captureBody) {
            result.push({ heading: currentHeading, body: "" });
          }
          currentHeading = text;
          captureBody = true;
        } else if (captureBody && text.trim() !== "") {
          result.push({ heading: currentHeading, body: text });
          captureBody = false;
          currentHeading = null;
        }
      }
    }
  
    return result;
  }
  

  function appendTextToDocument(documentId, text) {
    const doc = DocumentApp.openById(documentId);
    doc.getBody().appendParagraph(text);
  }
  

  function replaceTextInDocument(documentId, keyword, replacement) {
    const doc = DocumentApp.openById(documentId);
    const body = doc.getBody();
    body.replaceText(keyword, replacement);
  }
  

  function getDocumentText(documentId) {
    const doc = DocumentApp.openById(documentId);
    return doc.getBody().getText();
  }
  

  function addHeadingToDocument(documentId, headingText) {
    const doc = DocumentApp.openById(documentId);
    const body = doc.getBody();
    const heading = body.appendParagraph(headingText);
    heading.setHeading(DocumentApp.ParagraphHeading.HEADING1);  
  }
  

  function main() {
    const documentId = "";
  
  
    const headingsAndBodies = getHeading3AndBodyFromDocument(documentId);
    Logger.log("Headings and Bodies found in the document:");
    headingsAndBodies.forEach(item => {
      Logger.log(`Heading: ${item.heading}, Body: ${item.body}`);
    });

  }
  