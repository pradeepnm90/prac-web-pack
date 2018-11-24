export class TreeView {

    expanded = false;
    constructor(public name: string,
        public directories: Array<TreeView>,
        public files: Array<string>) {
    }
    toggle() {
        this.expanded = !this.expanded;
    }
    getIcon() {

        if (this.expanded) {
            return true;
        }

        return false;
    }
}
