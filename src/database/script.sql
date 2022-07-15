-- CREATE DATABASE prestago WITH OWNER = 'prestago_silva' ENCODING = 'UTF8' TABLESPACE = table_prestago;
DROP TABLE IF EXISTS registro CASCADE;
DROP TABLE IF EXISTS prestamo CASCADE;
DROP TABLE IF EXISTS pago CASCADE;
DROP TABLE IF EXISTS historial CASCADE;

DROP SCHEMA IF EXISTS main CASCADE;
DROP SCHEMA IF EXISTS adm CASCADE;

DROP SEQUENCE IF EXISTS registro_seq CASCADE;
DROP SEQUENCE IF EXISTS pago_seq CASCADE;
DROP SEQUENCE IF EXISTS prestamo_seq CASCADE;
DROP SEQUENCE IF EXISTS historial_seq CASCADE;



CREATE SCHEMA main;
CREATE SCHEMA adm;

CREATE SEQUENCE registro_seq;
CREATE SEQUENCE pago_seq;
CREATE SEQUENCE prestamo_seq;
CREATE SEQUENCE historial_seq;
CREATE TYPE enum_rol AS ENUM ('usuario', 'administrador');

CREATE TABLE registro (
  id INT4 NOT NULL DEFAULT NEXTVAL('registro_seq'),
  n_documento INTEGER NOT NULL,
  tipo_documento VARCHAR(4) NOT NULL,
  nombre_completo VARCHAR(50) NOT NULL,
  fecha_nacimiento date NOT NULL,
  numero_celular VARCHAR NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  profesion_u_oficio VARCHAR(100) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  rol enum_rol DEFAULT 'usuario',
  contrasena VARCHAR(12) NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO
  registro (
    n_documento,
    tipo_documento,
    nombre_completo,
    fecha_nacimiento,
    numero_celular,
    email,
    profesion_u_oficio,
    direccion,
    rol,
    contrasena
  )
VALUES
  (
    514326316,
    'CC',
    'Juan',
    '2020-01-01',
    3003716394,
    'hola@gmail.com',
    'Programing',
    'Calle 23 # 20-21',
    'usuario',
    '123456'
  );


CREATE TYPE enum_estado AS ENUM ('aprobado', 'rechazado', 'en espera');

CREATE TABLE prestamo (
  id INT4 NOT NULL DEFAULT NEXTVAL(' prestamo_seq '),
  monto_prestar INTEGER NOT NULL,
  plazo_en_meses INTEGER NOT NULL,
  nombre_completo VARCHAR(50) NOT NULL,
  fecha_creacion timestamp NOT NULL DEFAULT current_timestamp,
  taza_interes INTEGER DEFAULT 0.25 NULL,
  estado enum_estado DEFAULT 'en espera' NULL,
  id_registro INTEGER NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_registro FOREIGN KEY (id_registro) REFERENCES registro (id) ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO
  prestamo(
    monto_prestar,
    plazo_en_meses,
    nombre_completo,
    fecha_creacion,
    taza_interes,
    estado,
    id_registro
  )
VALUES
  (
    100000,
    12,
    'Juan Perez',
    '2020-01-01 00:00:00',
     0.25,
    'en espera',
    1
  );

CREATE TABLE pago (
  id INT4 NOT NULL DEFAULT NEXTVAL(' pago_seq '),
  fecha_pago_cuotas date NULL,
  cuota_pagar INTEGER NULL,
  cuota_faltante INTEGER NULL,
  saldo_restante INTEGER NULL,
  id_prestamo INTEGER NULL,
  id_registro INTEGER NULL,
  score INTEGER DEFAULT 300,
  PRIMARY KEY (id),
  CONSTRAINT fk_prestamo FOREIGN KEY (id_prestamo) REFERENCES prestamo (id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_registro FOREIGN KEY (id_registro) REFERENCES registro (id) ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO
  pago(
  fecha_pago_cuotas,
  cuota_pagar,
  cuota_faltante,
  saldo_restante,
  id_prestamo,
  id_registro,
  score
  )
VALUES
  ('2020-01-01',
   200000, 
   6, 
   1000000,
   1, 
   1,
   300
   );



CREATE TABLE historial (
  id INT4 NOT NULL DEFAULT NEXTVAL(' historial_seq '),
  PRIMARY KEY (id),
  CONSTRAINT fk_prestamo FOREIGN KEY (id) REFERENCES prestamo (id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_registro FOREIGN KEY (id) REFERENCES registro (id) ON DELETE RESTRICT ON UPDATE CASCADE
);