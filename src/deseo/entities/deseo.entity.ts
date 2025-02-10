import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Deseo {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    Id: number;
         @Column({ type: 'text' })
         deseo: string;
         @ApiProperty()
         @CreateDateColumn({ type: 'timestamp' })
         fechaRegistro: Date;
         @ApiProperty()
         @UpdateDateColumn({ type: 'timestamp' })
         fechaModificacion: Date;
         @ApiProperty()
         @Column({ type: 'json', nullable: true })
         metadata: any; // Aquí puedes almacenar JSON con datos adicionales
    }
 
