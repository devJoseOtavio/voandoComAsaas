package com.voandocomasaas.domain

class Customer {

    String nome
    String email
    String id
    Date nascimento
    Integer idade
    String genero
    String cep
    String endereco
    String cidade
    String estado
   

    static constraints = {
        nome size: 3..100, blank: false
        id size: 10..10, blank: false
        email size: 5..100, blank: false
        idade min: 16
        genero inList:["M","F"]
    }
}
