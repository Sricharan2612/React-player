import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://as1.ftcdn.net/v2/jpg/07/13/00/38/1000_F_713003825_mrRD3M21dNyf1QRJYGJPP5skDpCJXcc3.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://as2.ftcdn.net/v2/jpg/07/24/18/31/1000_F_724183191_AStawOaBMb2Sz7W9JFPelIp8GHY4aMtm.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://as2.ftcdn.net/v2/jpg/07/24/18/31/1000_F_724183188_zrlw0aCv3wUS9ORj9HxXR3NPG192hJJp.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://as1.ftcdn.net/v2/jpg/07/39/08/16/1000_F_739081646_lm5jlddFE1PBUoHrFx9pxfJII1O1DZT0.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://as1.ftcdn.net/v2/jpg/06/14/66/28/1000_F_614662835_60P2RrnTamqJjFQ8ydfHLktRQuSYRRbW.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://as2.ftcdn.net/v2/jpg/06/23/14/45/1000_F_623144520_9KJ1oPeiUkjqVT0z4x3n8Mle8bikMRv7.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
      },
    //ADD MORE HERE
  ];
}

export default chillHop;
