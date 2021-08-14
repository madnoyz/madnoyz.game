export class InputManager {
    observer: any = [];

    subscribe(fn: any){
        this.observer.push(fn);
    };

    unsubscribe(fn: any) {
        this.observer = this.observer.filter(subscriber => subscriber !== fn );
    };

    broadcast(action: string, data: any) {
        this.observer.forEach(subscriber => subscriber(action, data));
    }

    handleKeys(e: any) {
        e.preventDefault();
        switch (e.keyCode) {
            case 37:
                this.broadcast('move', {x:-1,y:0});
                break;
            case 38:
                this.broadcast('move', {x:0,y:-1});
                break;
            case 39:
                this.broadcast('move', {x:1,y:0});
                break;
            case 40:
                this.broadcast('move', {x:0, y:1});
                break;
            default:
                break;
        }
    };

    bindkeys(){
        document.addEventListener('keydown', this.handleKeys)
    }
    unbindkeys(){
        document.removeEventListener('keydown', this.handleKeys)
    }


}