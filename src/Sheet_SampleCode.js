
function appendRowToSheet(spreadsheetId, sheetName, rowData) {
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    sheet.appendRow(rowData);
  }

  function getSheetData(spreadsheetId, sheetName) {
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    return sheet.getDataRange().getValues();
  }
  
  function updateCell(spreadsheetId, sheetName, row, column, value) {
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    sheet.getRange(row, column).setValue(value);
  }
  

  function clearRange(spreadsheetId, sheetName, rangeA1) {
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    sheet.getRange(rangeA1).clearContent();
  }
  
  
  function clearSheet(spreadsheetId, sheetName) {
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    sheet.clear();
  }


  function createNewSheet(spreadsheetId, newSheetName) {
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    spreadsheet.insertSheet(newSheetName);
  }
  

  function applyConditionalFormatting(spreadsheetId, sheetName, rangeA1, minValue, maxValue) {
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    const range = sheet.getRange(rangeA1);
  
    const rule = SpreadsheetApp.newConditionalFormatRule()
      .whenNumberBetween(minValue, maxValue)
      .setBackground("#FFDDC1") 
      .setFontColor("#000000") 
      .setRanges([range])
      .build();
  
    const rules = sheet.getConditionalFormatRules();
    rules.push(rule);
    sheet.setConditionalFormatRules(rules);
  }
  

  function main() {
    const spreadsheetId = "";
    const sheetName = "Sheet1";

    applyConditionalFormatting(spreadsheetId, sheetName, "A1:A10", 10, 20);
  }
  