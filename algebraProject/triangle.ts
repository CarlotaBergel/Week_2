import { Point } from "./point";

export class Triangle{
    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;

    constructor(ver1:Point, ver2:Point, ver3:Point){
        this.vertex1 = ver1;
        this.vertex2 = ver2;
        this.vertex3 = ver3;
    }

    calculateLengthSides():number[]{
        let lados:number[] = [];

        let l1 = this.vertex1.calculateDistance(this.vertex2);
        lados.push(l1);

        let l2 = this.vertex1.calculateDistance(this.vertex3);
        lados.push(l2);

        let l3 = this.vertex2.calculateDistance(this.vertex3);
        lados.push(l3);

        return lados;
    }

}