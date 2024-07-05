export interface DataGempaJSONType {
    identifier: string;
    sender: string;
    sent: string;
    status: string;
    msgType: string;
    scope: string;
    code: string;
    info: {
      event: string;
      date: string;
      time: string;
      point: {
        coordinates_lng_lat: string;
      };
      latitude: string;
      longitude: string;
      magnitude: number;
      depth_km: number;
      area: string;
      eventid: string;
      potential: string;
      subject: string;
      headline: string;
      description: string;
      instruction: string;
      shakemap: string;
      wzmap?: string;
      ttmap?: string;
      sshmap?: string;
      felt?: string;
      instruction1?: string;
      instruction2?: string;
      instruction3?: string;
      wzarea?: {
        province: string;
        district: string;
        level: "AWAS" | "SIAGA" | "WASPADA";
        date: string;
        time: string;
      }[];
      timesent: string;
    };
  }
  
  export interface DataGempaType {
    // Tanggal, waktu dan eventid
    sent: string;
    date: string;
    time: string;
    eventid: string;
  
    // Informasi kejadian
    area: string;
    potential: string;
    subject: string;
    headline: string;
    description: string;
    instruction: string;
  
    // Parameter gempa dan mmi
    magnitude: number;
    latitude: number;
    longitude: number;
    depth_km: number;
    felt?: string;
    shakemap_src?: string;
  
    // Tsunami
    wzarea?: {
      province: string;
      district: string;
      level: "AWAS" | "SIAGA" | "WASPADA";
      date: string;
      time: string;
    }[];
    wzmap_src?: string;
    ttmap_src?: string;
    sshmap_src?: string;
    instruction1?: string;
    instruction2?: string;
    instruction3?: string;
  }
  
  export const DataGempaTemplate: DataGempaType = {
    sent: "",
    date: "",
    time: "",
    eventid: "",
    area: "",
    potential: "",
    subject: "",
    headline: "",
    description: "",
    instruction: "",
    magnitude: 0,
    latitude: 0,
    longitude: 0,
    depth_km: 0,
  };