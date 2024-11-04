function getMail() {
    const threads = GmailApp.search('is:unread', 0, 1); 
  
    if (threads.length > 0) {
      const latestThread = threads[0]; 
      const latestMessage = latestThread.getMessages().pop(); 
      const subject = latestMessage.getSubject();
      const body = latestMessage.getPlainBody();
      
      Logger.log("最新のメール - 件名: " + subject);
      Logger.log("本文: " + body);
      
      let label = GmailApp.getUserLabelByName("Processed");
      if (!label) {
        label = GmailApp.createLabel("Processed");
      }
      latestThread.addLabel(label);
      
      // latestThread.markRead();
    } else {
      Logger.log("未読メールなし");
    }
  }
  