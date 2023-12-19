package com.WildLife.Wild.entities;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "animais")
@Getter
@Setter
public class AnimaisEntity {
    @Column(name = "id_animal")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_animal;
    @Column(name = "cpf_identificaçao")
    private String cpf_identificaçao;
    @Column(name = "data_hora")
    private LocalDateTime data_hora;
    @Column(name = "org_responsavel")
    private String org_responsavel;
    @Column(name = "entrega")
    private Enum entrega;
    @Column(name = "nome")
    private String nome;
    @Column(name = "nome_cientifico")
    private String nome_cientifico;
    @Column(name = "local_entrega")
    private String local_entrega;
    @Column(name = "sexo")
    private Enum sexo;
    @Column(name = "cativeiro")
    private String cativeiro;
    @Column(name = "saude")
    private String saude;
    @Column(name = "registro_animal")
    private String registro_animal;
    @Column(name = "observaçao")
    private String observaçao;
    @Column(name = "entregue_por")
    private String entregue_por;
    @Column(name = "recebido")
    private String recebido;


}
