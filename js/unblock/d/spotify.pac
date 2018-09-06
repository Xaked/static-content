function FindProxyForURL(url, host) {

    blockedIp = dnsResolve(host);

    mask21 = "255.255.248.0";
    mask22 = "255.255.252.0";

    if (
      isInNet(blockedIp, "78.31.8.0", mask21) ||
      isInNet(blockedIp, "193.182.8.0", mask21) ||
      isInNet(blockedIp, "194.68.28.0", mask22)
    ) {
      return "SOCKS 63.155.122.123:42929; SOCKS 99.194.101.200:58459; SOCKS 76.3.5.123:43817; DIRECT"; 
    }
  
    return "DIRECT";
  }