function FindProxyForURL(url, host) {

    blockedIp = dnsResolve(host);
  
    mask17 = "255.255.128.0";
    mask18 = "255.255.192.0";
    mask19 = "255.255.224.0";
    mask20 = "255.255.240.0";
    mask21 = "255.255.248.0";
    mask22 = "255.255.252.0";
    mask23 = "255.255.254.0";
    mask24 = "255.255.255.0";
    mask29 = "255.255.255.248";
    mask32 = "255.255.255.255";
  
    if (
      // IP`s from zaborona.help  
      // VK
      isInNet(blockedIp, "87.240.128.0", mask18) ||
      isInNet(blockedIp, "93.186.224.0", mask20) ||
      isInNet(blockedIp, "95.142.192.0", mask20) ||
      isInNet(blockedIp, "95.213.0.0", mask18) ||
      isInNet(blockedIp, "185.29.130.0", mask24) ||
      isInNet(blockedIp, "185.32.248.0", mask22) ||
      // YANDEX
      isInNet(blockedIp, "5.45.192.0", mask18) ||
      isInNet(blockedIp, "5.255.192.0", mask18) ||
      isInNet(blockedIp, "37.9.64.0", mask18) ||
      isInNet(blockedIp, "37.140.128.0", mask18) ||
      isInNet(blockedIp, "77.75.152.0", mask21) ||
      isInNet(blockedIp, "77.88.0.0", mask18) ||
      isInNet(blockedIp, "84.201.128.0", mask18) ||
      isInNet(blockedIp, "87.250.224.0", mask19) ||
      isInNet(blockedIp, "93.158.128.0", mask18) ||
      isInNet(blockedIp, "95.108.128.0", mask17) ||
      isInNet(blockedIp, "100.43.64.0", mask19) ||
      isInNet(blockedIp, "109.235.160.0", mask21) ||
      isInNet(blockedIp, "130.193.32.0", mask19) ||
      isInNet(blockedIp, "141.8.128.0", mask18) ||
      isInNet(blockedIp, "178.154.128.0", mask17) ||
      isInNet(blockedIp, "185.32.185.0", mask24) ||
      isInNet(blockedIp, "185.32.186.0", mask24) ||
      isInNet(blockedIp, "185.71.76.0", mask22) ||
      isInNet(blockedIp, "199.21.96.0", mask22) ||
      isInNet(blockedIp, "199.36.240.0", mask22) ||
      isInNet(blockedIp, "213.180.192.0", mask19) ||
      // MAIL.RU
      isInNet(blockedIp, "5.61.16.0", mask21) ||
      isInNet(blockedIp, "5.61.232.0", mask21) ||
      isInNet(blockedIp, "79.137.157.0", mask24) ||
      isInNet(blockedIp, "79.137.183.0", mask24) ||
      isInNet(blockedIp, "94.100.176.0", mask20) ||
      isInNet(blockedIp, "95.163.32.0", mask19) ||
      isInNet(blockedIp, "95.163.248.0", mask21) ||
      isInNet(blockedIp, "128.140.168.0", mask21) ||
      isInNet(blockedIp, "178.22.88.0", mask21) ||
      isInNet(blockedIp, "178.237.16.0", mask20) ||
      isInNet(blockedIp, "185.5.136.0", mask22) ||
      isInNet(blockedIp, "185.16.148.0", mask22) ||
      isInNet(blockedIp, "185.16.244.0", mask22) ||
      isInNet(blockedIp, "188.93.56.0", mask21) ||
      isInNet(blockedIp, "194.186.63.0", mask24) ||
      isInNet(blockedIp, "195.211.20.0", mask22) ||
      isInNet(blockedIp, "195.218.168.0", mask24) ||
      isInNet(blockedIp, "217.20.144.0", mask20) ||
      isInNet(blockedIp, "217.69.128.0", mask20) ||
      isInNet(blockedIp, "195.211.128.0", mask22) ||
      isInNet(blockedIp, "208.87.92.0", mask22) ||
      isInNet(blockedIp, "185.6.244.0", mask22) ||
      isInNet(blockedIp, "185.30.176.0", mask22) ||
      isInNet(blockedIp, "195.218.190.0", mask23) ||
      // Mamba.ru (love.mail.ru)
      isInNet(blockedIp, "193.0.170.24", mask29) ||
      // Kaspersky
      isInNet(blockedIp, "77.74.176.0", mask21) ||
      isInNet(blockedIp, "91.103.64.0", mask21) ||
      isInNet(blockedIp, "93.159.224.0", mask21) ||
      isInNet(blockedIp, "185.54.220.0", mask23) ||
      isInNet(blockedIp, "185.85.12.0", mask24) ||
      isInNet(blockedIp, "185.85.14.0", mask23) ||
      // DrWeb
      isInNet(blockedIp, "195.88.252.0", mask23) ||
      isInNet(blockedIp, "178.248.232.183", mask32) ||
      isInNet(blockedIp, "178.248.233.94", mask32)
    ) {
      return "SOCKS socks.zaborona.help:1488; DIRECT"; 
    }
  
    return "DIRECT";
  }