<template>
    <v-container>
      <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Sobrenome
          </th>
          <th class="text-left">
            Idade
          </th>
          <th class="text-left">
            Gênero
          </th>
          <th class="text-left">
            Salário
          </th>
          <th class="text-left">
            Cidade
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="pessoas in dados"
        :key ="pessoas.nome"
        >  
          <td>{{ pessoas.nome }}</td>
          <td>{{ pessoas.sobrenome }}</td>
          <td>{{ pessoas.idade }}</td>
          <td>{{ pessoas.genero }}</td>
          <td>{{ pessoas.salario }}</td>
          <td>{{ pessoas.cidade }}</td>
        
        </tr>
      </tbody>
    </v-table>
    </v-container>
</template>
 <script>
 import populacao from "/assets/brazil.json"
    export default {
      data () {
        return {
          dados: populacao,
      }
    },
  }
</script>