drop DATABASE if EXISTS Gestion_Vacaciones;
create database Gestion_Vacaciones;
use Gestion_Vacaciones

create table empleados
(
dni int,
Nombre varchar(50),
Apellido varchar(50),
contrasena VARCHAR(50),
Telefono int(10),
email varchar(50),
direccion varchar(25),
localidad varchar(25),
fechaing DATE,
area VARCHAR(50),
 PRIMARY KEY(dni)
 );

insert into empleados VALUES (1, "Manuel", "Rey", "contraseña", 1111111111, "manurey@gmail.com", "2000/5/10", "jefe");
insert into empleados VALUES (2, "Leandro", "Solis", "contraseña", 2111111111, "leansolis@gmail.com", "1999/4/21", "jefe");
insert into empleados VALUES (3, "Nahele", "Piromalli", "contraseña", 2311111111, "nahetpiro@gmail.com", "2021/4/12", "empleado"); 
insert into empleados VALUES (4, "Juan Martin", "Miñarro", "contraseña", 3241111111, "miñamoto@gmail.com", "2016/1/15", "subjefe");
insert into empleados VALUES (5, "Tomas", "Musicmann", "contraseña", 3654111111, "tommym@gmail.com", "2015/1/4", "subjefe");
insert into empleados VALUES (6, "Juan Cruz", "Manfredi", "contraseña", 8761111111, "juanchi@gmail.com", "2020/6/22", "empleado");
insert into empleados VALUES (7, "Juan Pablo", "Yubran", "contraseña", 8781111111, "piponpipon@gmail.com", "2020/7/10", "empleado");
insert into empleados VALUES (8, "Gaston", "Tresca", "contraseña", 8321111111, "gastone@gmail.com", "2019/3/17", "empleado");
insert into empleados VALUES (9, "Agustin", "Bassani", "contraseña", 2691111111, "bassi@gmail.com", "2020/3/14", "empleado");
insert into empleados VALUES (10, "Vladimir", "Stopper", "contraseña", 5834111111, "vladi@gmail.com", "2022/8/28", "empleado");

create table vacacion
(
dni int,
nombre varchar(50),
apellido varchar(50),
opcion1 varchar(150),
opcion2 varchar(150),
opcion3 varchar(150),
	primary key(dni)
	);
	
	
insert into vacacion VALUES (1, "Manuel", "Rey", "Diciembre S3, Diciembre S4,  Enero S1 y Enero S2", "Enero S3, Enero S4, Marzo S1 y Marzo S2", "Enero S1, Enero S2, Febrero S1 y Febrero S2");
insert into vacacion VALUES (2, "Leandro", "Solis", "Diciembre S3, Diciembre S4,  Enero S1 y Enero S2", "Febrero S3, Febrero S4, Marzo S1 y Marzo S2", "Enero S2, Enero S3, Febrero S4 y Marzo S1");
insert into vacacion VALUES (3, "Nahele", "Piromalli", "Febrero S1, Febrero S2", "Febrero S3, Febrero S4", "Enero S3, Enero S4");
insert into vacacion VALUES (4, "Juan Martin", "Miñarro", "Enero S1, Enero S2, Enero S3", "Febrero S2, Febrero S3, Febrero S4", "Marzo S1, Marzo S2, Marzo S3");
insert into vacacion VALUES (5, "Tomas", "Musicmann", "Febrero S1, Febrero S2, Febrero S3", "Diciembre S4, Enero S1, Enero S2", "Febrero S4, Marzo S1, Marzo S2");
insert into vacacion VALUES (6, "Juan Cruz", "Manfredi", "Marzo S1, Marzo S2", "Febrero S2, Febrero S3", "Enero S2, Enero S3");
insert into vacacion VALUES (7, "Juan Pablo", "Yubran", "Enero S1, Enero S2", "Diciembre S3, Diciembre S4", "Febrero S1, Febrero S2");
insert into vacacion VALUES (8, "Gaston", "Tresca", "Febrero S3, Febrero S4", "Enero S1, Enero S2", "Febrero S1, Febrero S2");
insert into vacacion VALUES (9, "Agustin", "Bassani", "Enero S3, Enero S4", "Diciembre S3, Diciembre S4", "Febrero S1, Febrero S2");
insert into vacacion VALUES (10, "Vladimir", "Stopper", "Diciembre S3, Diciembre S4", "Enero S3, Enero S4", "Febrero S1, Febrero S2");