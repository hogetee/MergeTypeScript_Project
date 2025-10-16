function merge(
    collection1: number[], 
    collection2: number[], 
    collection3: number[] 
): number[] {
    //เนื่องจาก arr 1และ2 เรียงจาก min -> max อยู่แล้ว
    //แต่ arr 3 เรียงจาก max -> min จากเดิมที่วนอ่านค่าจากindex ช่องที่ 0 แค่เปลี่ยนเป็น max-1 เพื่อไล่อ่านจากช่องท้ายไล่มาช่องหน้า
    let x = 0; //index collection1
    let y = 0; //index collection2
    let z = collection3.length - 1; //index collection3
    const merged: number[] = []; 
    //ผมคิดว่าจะใช้การเช็คของ array แต่ละช่องแล้วถ้าช่องไหนน้อยสุดกจะถูกขยับมากขึ้นไป1ช่องจนครบทุกช่องแล้วจะให้ค่าเป็น Infinity เพื่อจะได้ไม่ไม่กวนการเช็ค min
    while (x < collection1.length || y < collection2.length || z >= 0) {
        const val1 = collection1[x] ?? Infinity;
        const val2 = collection2[y] ?? Infinity;
        const val3 = collection3[z] ?? Infinity; 

        const minValue = Math.min(val1, val2, val3); 
        merged.push(minValue);
        if (minValue === val1) x++;
        else if (minValue === val2) y++;
        else z--;

    }
    return merged;
}
export = { merge };

