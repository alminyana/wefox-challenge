export class Post {
  public id: number;
  public title: string;
  public content: string;
  public lat: number;
  public long: number;
  public image_url: string;

  constructor(id: number, title: string, content: string, lat: number, long: number, image_url: string){

      this.id = id;
      this.title = title;
      this.content = content;
      this.lat = lat;
      this.long = long;
      this.image_url = image_url;

  }


}
