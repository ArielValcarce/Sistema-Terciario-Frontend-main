/**
 * -Data interface:
 * These interfaces give us s a blueprint that 
 * contains properties from the Database
 */

export interface Alumno{
    id:number,
    nombre:string,
    apellido:string,
    email:string,
    telefono:string,
    password?:string
}


export interface Materia{
    id:number,
    nombre:string,
    curso:string,
    carrera:string
}

export interface Docente{
    id:number,
    nombre:string,
    materia:string,
    carrera:string
}