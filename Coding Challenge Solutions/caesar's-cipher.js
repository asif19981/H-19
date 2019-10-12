function rot13(str) {
	var n,m,result = "";
	for (var i = 0; i < str.length; i++) {
		n = str.charCodeAt(i);
		if (n - 13 < 65) {
			if (n < 64) {
				m = String.fromCharCode(n);
			} else {
				m = String.fromCharCode(n + 13);	
			}
		} else {
			m = String.fromCharCode(n - 13);
		}
    	result += m;
	}
	return result;
}
rot13("Y68P6B92");