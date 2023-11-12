class Root {
    constructor(root) {
        this.root = root;
    }

    add(html) {
        this.root.append(html);    
    }

    remove(el) {
        this.root.find(el).remove();
    }
}