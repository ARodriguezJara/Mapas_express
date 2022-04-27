
const boom = require('@hapi/boom');
const db = require('./db.service');
class TaqueriasService {
 constructor(){
 this.generate();
 }
 generate() {
 }
 async create(data) {
   const result = await db.query(`INSERT INTO tacolizador.taquerias(nombre, calidad, precio,
    comentario, latitud, longitud, pagina_fb) VALUES('${data.nombre}',${data.calidad},${data.precio},'${data.comentario}',${data.latitud},
     ${data.longitud},
     '${data.pagina_fb}')`);
 }
 async find(){
   const result = await db.query( `SELECT * FROM taquerias`);
   return [result];
 }
 async findOne(id) {
 //  const result = await db.query(`SELECT * FROM taquerias where id_taquerias=${id}`);
     const result = await db.query(`SELECT * FROM taquerias where id_taqueria=${id}`);
     return result;
 }
 async update(id, changes) {
   const result = await db.query( `UPDATE tacolizador.taquerias SET
   nombre='${changes.nombre}',
   calidad=${changes.calidad},
   precio =${changes.precio},
   comentario=' ${changes.comentario}',
   latitud=${changes.latitud},
   longitud=${changes.longitud},
   pagina_fb='${changes.pagina_fb}
   WHERE id_taqueria = ${id}`);
 }
 async delete(id) {
   const result = await db.query(`delete FROM taquerias where id_taqueria=${id}`);

 }
}
module.exports = TaqueriasService;
