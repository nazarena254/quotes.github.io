export class Quotes {
    // showDescription: boolean;
    public id!: number
    

    constructor(public text: string, public author: string,  public writtenBy: string, 
        public datePosted: Date, public downvotes: number, public upvotes: number) {
        // this.showDescription = false;
        this.upvotes = 0;
        this.downvotes = 0;
    }
}
// constructor(public text: string, public author: string,  public writtenBy: string, 
//     public completeDate: Date, public downvotes: number, public upvotes: number)