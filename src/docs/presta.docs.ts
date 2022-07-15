/**
 * 
 * @swagger
 * components:
 *   schemas:
 *       User_no_registered:
 *            type: object
 *            properties:
 *                _id:  
 *                     type: string
 *                     description: objectId of user no registered
 *                full_name:
 *                     type: string
 *                     description: full name of user no registered
 *                email:
 *                     type: string
 *                     description: email of user no registered
 *                monto_prestar:
 *                     type: number
 *                     description: monto a prestar of user no registered
 *                plazo_meses:
 *                     type: string
 *                     description: plazo en meses of user no registered 
 *            required:
 *                - full_name
 *                - email 
 *                - monto_prestar
 *                - plazo_meses
 */
/**
 * 
 * 
 * @swagger
 * /mongo:
 *  get:
 *      summary: Bring all users not registered. Esto es en la base de datos de mongo 
 *      tags: [users_not_registered]
 *      responses:
 *          200:
 *              description: Brought all the users not registered in the application
 *          500:
 *              description: Internal server error
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/user_no_registered'
 */
/**
 * 
 * @swagger
 * /mongo:
 *  post: 
 *      summary: Creates a new user no registered in the application
 *      tags: [Metod post the users no registered in mongo] 
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/user_no_registered'
 *      responses:
 *          201:
 *              description: Successfully created a new user no registered
 *          500:
 *              description: Failed to create a new user no registered
 *          400:
 *              description: Bad request  
 *               
 */
/**
 * 
 * @swagger
 * /mongo/:id:
 *  put:
 *      summary: Edit the user no registered
 *      tags: [update the user no registered]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: idenfication of the user no registered
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/user_no_registered'
 *      responses:
 *          200:
 *              description: Successfully updated user no registered
 *          304:
 *              description: User no registered with id not updated
 *          400:
 *              description: Bad request
 * 
 */
/**
 * @swagger
 * /mongo/:id:
 *  delete:
 *      summary: Delete a user no registered
 *      tags: [delete the user no registered]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: idenfication of the user no registered
 *      responses:
 *          202:
 *              description: Successfully removed user no registered
 *          400:
 *              description: Failed to remove user no registered
 *          404:
 *              description: User no registered with id does not exist
 */
// Postgres
/**
 * 
 * @swagger
 * components:
 *   schemas:
 *       Registration_postgres:
 *            type: object
 *            properties:
 *                nombre_completo:  
 *                     type: string
 *                     description: full name of registration
 *                fecha_nacimiento:
 *                     type: date
 *                     description: date of birth of registration
 *                numero_celular:
 *                     type: number
 *                     description: telephone number of registration
 *                tipo_documento:
 *                     type: string
 *                     description: type of document of registration
 *                N_documento:
 *                     type: number
 *                     description: number of document of registration
 *                profesion_u_oficio:
 *                     type: string
 *                     description: job or profession of registration
 *                direccion:
 *                     type: string
 *                     description: address of registration
 *                email:
 *                     type: string
 *                     description: email of registration 
 *                rol:
 *                     type: string
 *                     description: role of registration
 *                contraseña:
 *                     type: string
 *                     description: password of registration
 *                fecha_pago_cuotas:
 *                     type: date
 *                     description: date of payment of registration
 *                tiempo_pagar:
 *                     type: string
 *                     description: time to pay of registration
 *                cuota_pagar:
 *                     type: number
 *                     description: amount to pay of registration
 *                monto_prestar:
 *                     type: number
 *                     description: amount to loan of registration
 *                plazo_en_meses:
 *                     type: string
 *                     description: time to loan of registration
 *                fecha_creacion:
 *                     type: date
 *                     description: date of creation of registration
 *                tasa_interes:
 *                     type: string
 *                     description: interest rate of registration  
 *                estado:
 *                     type: string
 *                     description: status of registration 
 *     
 *            required:
 *                - nombre_completo
 *                - fecha_nacimiento
 *                - numero_celular
 *                - tipo_documento
 *                - N_documento
 *                - profesion_u_oficio
 *                - direccion
 *                - email
 *                - rol
 *                - contraseña
 *                - fecha_pago_cuotas
 *                - tiempo_pagar
 *                - cuota_pagar
 *                - monto_prestar
 *                - plazo_en_meses
 *                - fecha_creacion
 *                - tasa_interes
 *                - estado
 * 
 */
/**
 * 
 * 
 * @swagger
 * /registro:
 *  get:
 *      summary: Bring all registrations. Esto es en la base de datos de postgres
 *      tags: [registrations]
 *      responses:
 *          200:
 *              description: Brought all the registrations
 *          500:
 *              description: Internal server error
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/user_no_registered'
 */
/**
 * 
 * @swagger
 * /registro/:id:
 *  get:
 *      summary: Bring a registration by id
 *      tags: [registrations by id]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: idenfication of the one registration  
 */
/**
 * 
 * @swagger
 * /registro:
 *  post: 
 *      summary: Creates a new registration the users
 *      tags: [metod post the registrations] 
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Registration_postgres'         
 */
/**
 * 
 * @swagger
 * /registro/:id:
 *  put:
 *      summary: Edit the registration
 *      tags: [update the registration]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: idenfication of the registration
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Registration_postgres'
 */
/**
 * @swagger
 * /registro/:id:
 *  delete:
 *      summary: Delete a registration
 *      tags: [delete the registration]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: idenfication of the registration
 *      responses:
 *          200:
 *              description: Registration deleted successfully
 *          500:
 *              description: Internal server error
 */
/**
 * 
 * @swagger
 * components:
 *   schemas:
 *       Prestamo_postgres:
 *            type: object
 *            properties:
 *                nombre_completo:  
 *                     type: string
 *                     description: full name of registration
 *                monto_prestar:
 *                     type: number
 *                     description: amount to loan of registration
 *                plazo_en_meses:
 *                     type: string
 *                     description: time to loan of registration
 *                fecha_creacion:
 *                     type: date
 *                     description: date of creation of registration
 *                tasa_interes:
 *                     type: string
 *                     description: interest rate of registration  
 *                estado:
 *                     type: string
 *                     description: status of registration 
 *     
 *            required:
 *                - nombre_completo
 *                - monto_prestar
 *                - plazo_en_meses
 *                - fecha_creacion
 *                - tasa_interes
 *                - estado
 * 
 */
/**
 * 
 * @swagger
 * /prestamo:
 *  get:
 *      summary: Bring all loans. Esto es en la base de datos de postgres
 *      tags: [prestamos]
 *      responses:
 *          200:
 *              description: Brought all the loans
 *          500:
 *              description: Internal server error
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/Prestamo_postgres'
 */
/**
 * 
 * @swagger
 * /prestamo/:id:
 *  get:
 *      summary: Bring a loan by id
 *      tags: [loan by id]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: idenfication of the one loan
 */
/**
 * 
 * @swagger
 * /prestamo:
 *  post: 
 *      summary: Creates a new loan the users
 *      tags: [metod post the loans] 
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Prestamo_postgres'         
 */
/**
 * 
 * @swagger
 * /prestamo/:id:
 *  put:
 *      summary: Edit the loan
 *      tags: [update the loan]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: idenfication of the loan
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Prestamo_postgres'
 */
/**
 * @swagger
 * /prestamo/:id:
 *  delete:
 *      summary: Delete a loan
 *      tags: [delete the loan]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: idenfication of the loan
 *      responses:
 *          200:
 *              description: logan deleted successfully
 *          500:
 *              description: Internal server error
*/
/**
 * 
 * @swagger
 * components:
 *   schemas:
 *       Pago_postgres:
 *            type: object
 *            properties:
 *                fecha_pago_cuota:  
 *                     type: date
 *                     description: date of payment
 *                tiempo_pago:
 *                     type: number
 *                     description: time of payment
 *                cuota_pagar:
 *                     type: number
 *                     description: amount of payment
 *            required:
 *                - fecha_pago_cuota
 *                - tiempo_pago
 *                - cuota_pagar
 */
/**
 * 
 * @swagger
 * /pago:
 *  get:
 *      summary: Bring all payments. Esto es en la base de datos de postgres
 *      tags: [pagos]
 *      responses:
 *          200:
 *              description: Brought all the payments
 *          500:
 *              description: Internal server error
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/Pago_postgres'
 */
/**
 * 
 * @swagger
 * /pago/:id:
 *  get:
 *      summary: Bring a payment by id
 *      tags: [Bring by id]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: idenfication of the one payment
 */
/**
 * 
 * @swagger
 * /pago:
 *  post: 
 *      summary: Creates a new payment the users
 *      tags: [metod post the payments] 
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Pago_postgres'         
 */
/**
 * 
 * @swagger
 * /pago/:id:
 *  put:
 *      summary: Edit the payment
 *      tags: [update the payment]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: idenfication of the payment
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Pago_postgres'
 */
/**
 * @swagger
 * /pago/:id:
 *  delete:
 *      summary: Delete a payment
 *      tags: [delete the payment]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: idenfication of the payment
 *      responses:
 *          200:
 *              description: payment deleted successfully
 *          500:
 *              description: Internal server error
*/