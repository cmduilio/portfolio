import React, {useState, useEffect, useRef} from 'react';
import './Bfs.css';

function Bfs(){
    const [canvasSize, setCanvasSize] = useState({width: 800, height: 600});
    const [hexSize, setHexSize] = useState(20);
    const [hexOrigin, setHexOrigin]= useState({x: canvasSize.width/2, y: canvasSize.height/2 - hexSize});
    const [gridBorders, setGridBorders] = useState()
    const [canvasPosition, setCanvasPosition] = useState();
    const [currentHex, setCurrentHex] = useState({q:0,r:0,s:0,x:0, y:0});
    const [playerPosition, setPlayerPosition] = useState({q:0,r:0,s:0,x:0, y:0});
    const [obstacles, setObstacles] = useState([]);
    const [enableGrid, setEnableGrid] = useState([]);
    const [currentDistanceLine, setCurrentDistanceLine] = useState([]);
    const [path, setPath] = useState([]);
    const [lastHex, setLastHex] = useState({});
    const [hexPath, setHexPath] = useState();

    const canvas = useRef(null);
    const canvasView = useRef(null);
    const canvasInteraction = useRef(null);
    const canvasCoordinates = useRef(null);
    let ctx = null;

    const drawLine = (ctx, info, style = {}) => {
        const { x1, y1, x2, y2 } = info;
        const { color = 'black', width = 1 } = style;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.closePath();
    }

    const getHexCoordinates = (center, i) => {
        let angleDeg = 60 * i - 30;
        let angleRad = Math.PI / 180 * angleDeg;
        let x = center.x + (hexSize * Math.cos(angleRad));
        let y = center.y + (hexSize * Math.sin(angleRad));

        return Point(x, y);
    }

    const drawHex = (ctx, center, style, fillColor) => {
        for(let i = 0; i <= 5; i++){
            let start = getHexCoordinates(center, i);
            let end = getHexCoordinates(center, i+1);
            fillHex(ctx, center, fillColor);
            drawLine(ctx, {x1:start.x, y1:start.y, x2:end.x, y2:end.y}, style);
        }
    }

    const drawHexes = (ctx) => {
        const {width, height} = canvasSize;
        const {hexWidth, hexHeight, vertDist, horizDist} = getHexParameters();
        let qLeftSide = Math.round(hexOrigin.x/hexWidth) * 2;
        let qRightSide = Math.round(width - hexOrigin.x) / hexWidth * 2;
        let rTopSide = Math.round(hexOrigin.y / (hexHeight/2));
        let rBottomSide = Math.round((height - hexOrigin.y) / (hexHeight/2));
        let grid = [];

        console.log("hola pian", qLeftSide,qRightSide,rTopSide,rBottomSide);
        for(let r = -rTopSide + 5; r <= rBottomSide - 7; r++){
            for(let q = -qLeftSide; q <= qRightSide; q++){
                let center = hexToPixel({q:q, r:r})
                if((center.x > hexWidth/2) && (center.x < width - hexWidth/2) && (center.y < height - hexHeight/2)){
                    drawHex(ctx, center, {color: "black", width: 1}, "grey");
                    drawHexCoordinates(ctx, center, Hex(q,r,-q-r));
                    grid.push(Hex(q,r,-q-r));
                    //breadthFirstSearch(Hex(q,r,-q-r));
                }
            }
        }
        setEnableGrid(grid);
        setGridBorders({left: qLeftSide, right: qRightSide, top: rTopSide, bottom: rBottomSide});
    }

    const hexToPixel = (h) => {
        let x = hexSize * Math.sqrt(3) * (h.q + h.r/2) + hexOrigin.x;
        let y = hexSize * 3/2 * h.r + hexSize + hexOrigin.y;
        return Point(x, y);
    }

    const drawHexCoordinates = (ctx, center, h) => {
        ctx.fillText(h.q, center.x+4, center.y);
        ctx.fillText(h.r, center.x-2, center.y+12);
        ctx.fillText(h.s, center.x-12, center.y);
    }

    const getHexParameters = () => {
        let hexHeight = hexSize * 2;
        let hexWidth = Math.sqrt(3)/2 * hexHeight;
        let vertDist = hexHeight * 3/4;
        let horizDist = hexWidth;
        return {hexWidth, hexHeight, vertDist, horizDist};
    }

    const handleMouseMovement = e => {
        const {left, right, top, bottom} = canvasPosition;
        let offsetX = e.pageX - left;
        let offsetY = e.pageY - top;
        console.log(offsetX, offsetY);
        const {q, r, s} = cubeRound(pixelToHex(Point(offsetX, offsetY)));
        const {x, y} = hexToPixel(Hex(q, r, s));
        //drawNeighbors(Hex(q,r,s));
        //drawHex(ctx, Point(x,y),{color:"lime", width:1});
        if(!areEqualHexes(currentHex,{q,r,s,x,y})) {
            console.log({q,r,s});
            setCurrentHex({q, r, s, x, y});
        }

    }

    const areEqualHexes = (hex1, hex2) => {
        return hex1.q === hex2.q && hex1.r === hex2.r && hex1.s === hex2.s;
    }

    const printPathToHex = () => {
        const canvasEle = canvasInteraction.current;
        let ctx = canvasEle.getContext("2d");
        ctx.clearRect(0,0, canvasSize.width, canvasSize.height);
        for(let i = 0; i < currentDistanceLine.length ; i++){
            let current = JSON.parse(currentDistanceLine[i]);
            let color =  areEqualHexes(current, playerPosition) ? "red" : "aquamarine";
            drawHex(ctx, hexToPixel(current), {color:"lime", width:1}, color);
        }
        obstacles.map( obs => {
           drawHex(ctx, Point(obs.x,obs.y), {color: "black", width:1}, "black");
        });

        ctx = canvasView.current.getContext("2d");
        ctx.clearRect(0,0, canvasSize.width, canvasSize.height);

    }
    const cubeRound = (cube) => {
        var rx = Math.round(cube.q);
        var ry = Math.round(cube.r);
        var rz = Math.round(cube.s);

        var xDiff = Math.abs(rx - cube.q);
        var yDiff = Math.abs(ry - cube.r);
        var zDiff = Math.abs(rz - cube.s);

        if(xDiff > yDiff && xDiff > zDiff){
            rx = -ry-rz;
        } else if(yDiff > zDiff){
            ry = -rx-rz;
        } else {
            rz = -rx-ry;
        }

        return Hex(rx, ry, rz);
    }

    const getCanvasPosition = (thisCanvas) => {
        let rect = thisCanvas.getBoundingClientRect();
        setCanvasPosition({left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom});
    }

    const pixelToHex = p => {
        let q = ((p.x - hexOrigin.x) * Math.sqrt(3)/3 - (p.y - hexOrigin.y - hexSize) / 3) / hexSize;
        let r = ((p.y - hexOrigin.y - hexSize) * 2/3 / hexSize);

        return Hex(q, r, - q - r);
    }

    const Hex = (q, r, s) => {
        return {q: q, r: r, s: s};
    }

    const Point = (x,y) => {
        return {x: x, y: y};
    }

    const cubeDirections = [Hex(1, -1, 0), Hex(1, 0, -1), Hex(0, 1, -1),
                            Hex(-1, 1, 0), Hex(-1, 0, 1), Hex(0, -1, +1)];

    const cubeAdd = (a, b) => {
        return Hex(a.q + b.q,a.r + b.r, a.s + b.s);
    }

    const cubeSubstract = (a,b) => {
        return Hex(a.q - b.q,a.r - b.r, a.s - b.s);
    }

    const cubeDistance = (a, b) => {
        const {q, r, s} = cubeSubstract(a,b);
        return (Math.abs(q) + Math.abs(r) + Math.abs(s)) / 2;
    }
    
    const getNeighbors = (hex) => {
        var neighbors = [];
        for(let i = 0; i < cubeDirections.length; i++){
            neighbors.push(cubeAdd(hex, cubeDirections[i]));
        }
        return neighbors;
    }

    const drawNeighbors = (hex) => {
        for(let i = 0; i < cubeDirections.length; i++){
            const {q,r,s} = cubeAdd(hex, cubeDirections[i]);
            const {x, y} = hexToPixel(Hex(q,r,s));
            const canvasEle = canvasInteraction.current;
            ctx = canvasEle.getContext("2d");
            drawHex(ctx, Point(x,y), {color:"red", width:1});
        }
    }

    const lerp = (a,b,t) => {
        return (a + (b -a) * t);
    }

    const cubeLerp = (a, b, t) => {
        return Hex(lerp(a.q, b.q, t), lerp(a.r, b.r, t), lerp(a.s, b.s, t));
    }

    const getDistanceLine = (from, to) => {
        let dist = cubeDistance(from, to);
        var arr = [];
        for (let i = 0; i <= dist; i++){
            let t = dist === 0 ? 1.0 : 1.0 / dist * i;
            let center = hexToPixel(cubeRound(cubeLerp(from, to, t)))
            arr.push(center);
        }
        setCurrentDistanceLine(arr);
    }

    const fillHex = (ctx, center, fillcolor) => {
        let c0 = getHexCoordinates(center, 0);
        ctx.beginPath();
        ctx.fillStyle = fillcolor;
        ctx.globalAlpha = 0.1;
        ctx.moveTo(c0.x, c0.y);

        for(let i = 1; i <= 5; i++){
            let c = getHexCoordinates(center, i);
            ctx.lineTo(c.x,c.y);
        }
        ctx.closePath();
        ctx.fill();
    }

    const middleClick = (e) => {
        checkInGrid(() => middleClickAction(e));
    }

    const middleClickAction = (e) => {
        if(e.button === 1) {
            let arr = [];
            if (obstacles.filter(obs => areEqualHexes(obs, currentHex)).length === 0) {
                arr = [].concat(obstacles, currentHex);
            } else {
                arr = obstacles.filter(item => !areEqualHexes(item, currentHex));
            }
            setObstacles(arr);
        }
    }

    const handleClick = () => {
        checkInGrid( () => setPlayerPosition(currentHex));
    }

    const breadthFirstSearch = (from, to) => {
        let frontier = [from];
        let cameFrom = {};

        cameFrom[JSON.stringify(from)] = JSON.stringify(from);

        let count = 0;
        while (frontier.length !== 0) {
            count++;
            let current = frontier.shift();
            if (areEqualHexes(Hex(current.q, current.r, current.s), Hex(to.q,to.r,to.s)) || count >= 50000){
                break;
            }
            getNeighbors(current).map((l) => {
                if(!cameFrom.hasOwnProperty(JSON.stringify(l)) && obstacles.filter(obs => areEqualHexes(obs,l)).length === 0){
                    frontier.push(l);
                    cameFrom[JSON.stringify(l)] = JSON.stringify(current);
                }
            });
        }
        setLastHex(cameFrom);
    }

    const getPath = (from, to) => {
        from = JSON.stringify(Hex(from.q,from.r,from.s));
        to = JSON.stringify(Hex(to.q,to.r,to.s));

        if(lastHex[to] !== undefined){
            let thisPath = [to];
            while (!areEqualHexes(JSON.parse(to), JSON.parse(from))) {
                to = lastHex[to];
                thisPath.push(to);
            }
            thisPath = [].concat(thisPath);
            setCurrentDistanceLine(thisPath);
        } else {
            setCurrentDistanceLine([JSON.stringify(playerPosition)]);
        }
    }

    const checkInGrid = (callbackOk, callbackError) => {
        if(obstacles.filter(obs => areEqualHexes(obs,currentHex)).length === 0 &&
            enableGrid.filter(tile => areEqualHexes(tile,currentHex)).length > 0 ) {
            callbackOk();
        } else {
            if(callbackError) {
                callbackError();
            }
        };
    }

    useEffect(() => {
        printPathToHex();
    }, [currentDistanceLine]);

    useEffect(() => {
        //getDistanceLine(playerPosition, currentHex);
        checkInGrid(() => breadthFirstSearch(playerPosition, currentHex),
            () => printPathToHex());
    }, [playerPosition, currentHex, obstacles]);

    useEffect(() => {
        getPath(playerPosition, currentHex);
    }, [lastHex]);

    useEffect(() => {
        const canvasEle = canvas.current;
        ctx = canvasEle.getContext("2d");
        ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
        getCanvasPosition(canvasEle);
        drawHexes(ctx);
    }, []);

    return (
        <div className={"bfs"}>
            <canvas ref={canvas} height={canvasSize.height} width={canvasSize.width}/>
            <canvas ref={canvasCoordinates} height={canvasSize.height} width={canvasSize.width}/>
            <canvas ref={canvasView} height={canvasSize.height} width={canvasSize.width}/>
            <canvas ref={canvasInteraction} height={canvasSize.height} width={canvasSize.width}
                    onMouseMove={handleMouseMovement} onClick={handleClick} onMouseDown={middleClick}/>
        </div>
    );
}

export const MemoBfs = React.memo(Bfs);