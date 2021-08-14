import React, {useRef, useEffect} from "react";
import { InputManager}  from './InputManager';

function ReactRogue(props: any) {
    //hook
    const canvasRef: any = useRef(null);

    let inputManager = new InputManager();
    const handleInput = (action: string, data: any) => {
        console.log('handle input: ${action}:${JSON.stringify(data)}');
    };
    useEffect( ()=>{
        console.log('Bind input');
        inputManager.bindkeys();
        inputManager.subscribe(handleInput);
        return () => {
            inputManager.unbindkeys();
            inputManager.unsubscribe(handleInput);
        };
    });
    //lifecycle hook. called when DOM gets changed.
    // state of our game.
    useEffect(()=> {
        console.log('Draw to canvas');
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, props.width * props.tilesize, props.height * props.tilesize);
        ctx.fillStyle='#000';
        ctx.fillRect(12, 22, 16, 16);
    });
    return (
        <canvas
            id="canvas"
            ref={canvasRef}
            width={ props.width * props.tilesize}
            height={props.height * props.tilesize}
            style={{ border: '1px solid black' }}
        ></canvas>
    )
}

export default ReactRogue;