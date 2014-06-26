var SmartPhone = {
  getUserAgent: function() {
  	return navigator.userAgent;
  },
  isAndroid: function() {
  	return this.getUserAgent().match(/Android/i);
  },
  isBlackBerry: function() {
  	return this.getUserAgent().match(/BlackBerry/i);
  },
  isIOS: function() {
  	return this.getUserAgent().match(/iPhone|iPad|iPod/i);
  },
  isOperaMobile: function() {
  	return this.getUserAgent().match(/Mozilla|Windows NT/i);
  },
  isOpera: function() {
  	return this.getUserAgent().match(/Opera Mini/i);
  },
  isWindows: function() {
  	return this.isWindowsDesktop() || this.isWindowsMobile();
  },
  isWindowsMobile: function() {
  	return this.getUserAgent().match(/IEMobile/i);
  },
  isWindowsDesktop: function() {
  	return this.getUserAgent().match(/WPDesktop/i); ;
  },
  isAny: function() {
  	var foundAny = false;
  	var getAllMethods = Object.getOwnPropertyNames(SmartPhone).filter(function(property) {
  		return typeof SmartPhone[property] == 'function';
  	});
  
  	for (var index in getAllMethods) {
  		if (getAllMethods[index] === 'getUserAgent' || getAllMethods[index] === 'isAny' || getAllMethods[index] === 'isWindows') {
  			continue;
  		}
  		if (SmartPhone[getAllMethods[index]]()) {
  			foundAny = true;
  			break;
  		}
  	}
  	return foundAny;
  }
  };
  
  /*if(SmartPhone.isAndroid() || SmartPhone.isBlackBerry() || SmartPhone.isIOS())
  {
  saveBrowser(navigator.userAgent);
  }
  if(SmartPhone.isOperaMobile())
  {
  saveBrowser("Opera/Navegador de escritorio.");
  }
  if(SmartPhone.isAny())
  {
  saveBrowser(navigator.userAgent);
  }*/
