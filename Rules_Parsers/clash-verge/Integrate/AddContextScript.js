// Define the `main` function

function main(params) {
    params["mixed-port"] = 7890;
    params["allow-lan"] = true;
    params["bind-address"] = "*";
    params["mode"] = "rule";
    params["log-leve"] = "silent"
    params.profile = {
      "store-fake-ip": true,
      "store-selected": true
    }
    params.dns = {
      "enable": true,
      "ipv6": true,
      "listen": "0.0.0.0:53",
      "default-nameserver": [
        '114.114.114.114',
        '180.76.76.76',
        '1.2.4.8',
        '8.8.8.8',
        '8.8.4.4',
        '1.1.1.1',
        '1.0.0.1',
        '4.2.2.1',
        '4.2.2.2',
       // "[2400:3200:baba::1]:53"
      ],
      "enhanced-mode": "fake-ip",
      "use-hosts": true,
      "nameserver": [
        'udp://223.5.5.5',
        'udp://180.76.76.76',
        'udp://1.2.4.8',
        'udp://210.2.4.8',
        'tcp://114.114.114.114',
        'tls://1.12.12.12',
        'tls://120.53.53.53',
        'tls://dns.alidns.com',
        'tls://dot.pub',
        'tls://dot.360.cn',
        'https://223.5.5.5/dns-query',
        'https://223.6.6.6/dns-query',
        'https://dns.alidns.com/dns-query',
        'https://doh.pub/dns-query',
        'https://1.12.12.12/dns-query',
        'https://120.53.53.53/dns-query',
        'https://doh.360.cn/dns-query',
        //"[2400:3200::1]:53",
        //"[2400:3200:baba::1]:53",
        //'https://2400:3200::1/dns-query',
        //'https://2400:3200:baba::1/dns-query',
        //"[2402:4e00::]:53",
        //"[2400:da00::6666]:53",
        //"[2001:dc7:1000::1]:53",
        //"[240C::6666]:53",
        //"[240C::6644]:53",
        //'tls://dns.ipv6dns.com',
        //'https://dns.ipv6dns.com/dns-query',
        //"[2001:cc0:2fff:1::6666]:53",
        //"[2001:cc0:2fff:2::6]:53",
        //"[2001:da8::666]:53",
        //"[2001:da8:8000:1:202:120:2:101]:53",
        //"[2001:da8:202:10::36]:53",
        //"[2001:da8:202:10::37]:53",
        //"[2001:da8:208:10::6]:53",
        //"[2001:da8::666]:53"
      ],
      "fallback": [
        'tls://dns.google',
        'tls://dns.adguard.com',
        'tls://dns-family.adguard.com',
        'tls://dot.sb',
        'tls://1dot1dot1dot1.cloudflare-dns.com',
        'tls://one.one.one.one',
        'https://dns.google/dns-query',
        'https://dns.google/resolve',
        'https://dns.quad9.net/dns-query',
        'https://doh.opendns.com/dns-query',
        'https://1.1.1.1/dns-query',
        'https://1.0.0.1/dns-query',
        'https://cloudflare-dns.com/dns-query',
        'https://dns.adguard.com/dns-query',
        'https://doh.dns.sb/dns-query',
        'https://doh.sb/dns-query',
        'https://public.dns.iij.jp/dns-query',
        'https://doh-jp.blahdns.com/dns-query',
        //'https://[2001:4860:4860::64]/dns-query',
        //'https://[2001:4860:4860::6464]/dns-query',
        //'https://[2606:4700:4700::1111]/dns-query',
        //'https://[2606:4700:4700::1001]/dns-query',
        //'https://[2606:4700:4700::64]/dns-query',
        //'https://[2606:4700:4700::6464]/dns-query',
        'https://dns.quad9.net/dns-query',
        'https://dns11.quad9.net/dns-query'
      ],
      "fake-ip-filter": [
        "*.lan",
        "*.localdomain",
        "*.example",
        "*.invalid",
        "*.localhost",
        "*.test",
        "*.local",
        "*.home.arpa",
        'time.*.com',
        'time.*.gov',
        'time.*.edu.cn',
        'time.*.apple.com',
        'time1.*.com',
        'time2.*.com',
        'time3.*.com',
        'time4.*.com',
        'time5.*.com',
        'time6.*.com',
        'time7.*.com',
        'ntp.*.com',
        'ntp1.*.com',
        'ntp2.*.com',
        'ntp3.*.com',
        'ntp4.*.com',
        'ntp5.*.com',
        'ntp6.*.com',
        'ntp7.*.com',
        "*.time.edu.cn",
        "*.ntp.org.cn",
        "+.pool.ntp.org",
        'music.163.com',
        "*.music.163.com",
        "*.126.net",
        'musicapi.taihe.com',
        'music.taihe.com',
        'songsearch.kugou.com',
        'trackercdn.kugou.com',
        "*.kuwo.cn",
        'api-jooxtt.sanook.com',
        'api.joox.com',
        'joox.com',
        'y.qq.com',
        "*.y.qq.com",
        'streamoc.music.tc.qq.com',
        'mobileoc.music.tc.qq.com',
        'isure.stream.qqmusic.qq.com',
        'dl.stream.qqmusic.qq.com',
        'aqqmusic.tc.qq.com',
        'amobile.music.tc.qq.com',
        "*.xiami.com",
        "*.music.migu.cn",
        'music.migu.cn',
        "*.msftconnecttest.com",
        "*.msftncsi.com",
        'msftconnecttest.com',
        'msftncsi.com',
        'localhost.ptlogin2.qq.com',
        'localhost.sec.qq.com',
        "+.srv.nintendo.net",
        "+.stun.playstation.net",
        'xbox.*.microsoft.com',
        'xnotify.xboxlive.com',
        "+.battlenet.com.cn",
        "+.wotgame.cn",
        "+.wggames.cn",
        "+.wowsgame.cn",
        "+.wargaming.net",
        'proxy.golang.org',
        'stun.*.*',
        'stun.*.*.*',
        "+.stun.*.*",
        "+.stun.*.*.*",
        "+.stun.*.*.*.*",
        'heartbeat.belkin.com',
        "*.linksys.com",
        "*.linksyssmartwifi.com",
        "*.router.asus.com",
        'mesu.apple.com',
        'swscan.apple.com',
        'swquery.apple.com',
        'swdownload.apple.com',
        'swcdn.apple.com',
        'swdist.apple.com',
        'lens.l.google.com',
        'stun.l.google.com',
        "+.nflxvideo.net",
        "*.square-enix.com",
        "*.finalfantasyxiv.com",
        "*.ffxiv.com"
      ],
      "fallback-filter": {
        "geoip": true,
        "getip-code": "CN",
        "ipcidr": [
          '0.0.0.0/8',
          '10.0.0.0/8',
          '100.64.0.0/10',
          '127.0.0.0/8',
          '169.254.0.0/16',
          '172.16.0.0/12',
          '192.0.0.0/24',
          '192.0.2.0/24',
          '192.168.0.0/16',
          '192.88.99.0/24',
          '198.18.0.0/15',
          '198.51.100.0/24',
          '203.0.113.0/24',
          '224.0.0.0/4',
          '240.0.0.0/4',
          '255.255.255.255/32'
        ],
        "domain": [
          "+.facebook.com",
          "+.githubusercontent.com",
          "+.google.com",
          "+.youtube.com"
        ]
      }
    }
    return params;
  }