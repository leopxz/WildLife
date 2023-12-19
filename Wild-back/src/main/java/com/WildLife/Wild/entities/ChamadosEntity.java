package com.WildLife.Wild.entities;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "chamados")
@Getter
@Setter
public class ChamadosEntity {
    @Column(name = "id_chamado")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_chamado;
    @Column(name = "nome")
    private String nome;
    @Column(name = "telefone")
    private String telefone;
    @Column(name = "especie")
    private String especie;
    @Column(name = "cep")
    private String cep;
    @Column(name = "rua")
    private String rua;
    @Column(name = "numero")
    private String numero;
    @Column(name = "complemento")
    private String complemento;
    @Column(name = "bairro")
    private String bairro;


}
