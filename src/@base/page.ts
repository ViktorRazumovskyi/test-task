abstract class Page {
    private readonly url: string;

    get Url() {
        return this.url;
    }
    protected constructor(url: string) {
        this.url = url
    }

    public open(): void {
        browser.url(this.url)
    }
}

export { Page };
