<template>
  <div class="q-pa-xs q-ma-xs">
    <q-table title="teste" hide-pagination :rows="rows" :columns="columns">
      <template v-slot:top>
        <div class="col-xs-6" align="left">
          <div class="text-h6">Clientes</div>
        </div>
        <div class="col-xs-6" align="right">
          <q-btn color="primary" push label="Cadastrar" no-caps icon="add" @click="goToCreateClient()"></q-btn>
        </div>

      </template>

      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn class="glossy" size="sm" no-caps push icon="edit" color="dark" label="Editar" />
            <q-btn class="glossy" size="sm" no-caps push icon="delete" color="red" label="Excluir" @click="goToDeleteClient()"/>
          </div>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="createClient" persistent >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center">
          <div class="text-h6">Cadastrar cliente</div>
        </q-card-section>

        <q-card-section class="row items-center q-col-gutter-md">
          <div class="col-xs-4">
            <q-input outlined label="Código do cliente"></q-input>
          </div>
          <div class="col-xs-8">
            <q-input outlined label="Nome do cliente"></q-input>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn push no-caps icon="save" label="Salvar" color="primary" />
          <q-btn push no-caps icon="cancel" label="Cancelar" color="black" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="deleteClient" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="red" text-color="white" />
          <span class="q-ml-sm">Tem certeza que deseja excluir o item selecionado ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn push no-caps icon="delete" label="Confirmar" color="red" v-close-popup />
          <q-btn push no-caps icon="cancel" label="Cancelar" color="dark" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

export default {
  name: 'ClientIndex',
  data() {
    return {
      deleteClient: false,
      createClient: false,
      rows: [],
      columns: [
      { align:'left', name: 'userId', label: 'Código', field: 'userId' },
        { align: 'left', name: 'title', label: 'Nome', field: 'title' },
        { align:'center', name: 'action', label: 'Ações', field: 'action' }

      ]

    }
  },
  mounted() {
    this.onGetData()
  },
  methods: {
    onGetData() {
      this.$axios({ method: 'get', url: 'https://jsonplaceholder.typicode.com/posts' })
        .then((response) => {
          this.rows = response.data
        })
        .catch((error) => {
        console.log(error)
      })
    },

    goToCreateClient() {
      this.createClient = true
    },

    goToDeleteClient() {
      this.deleteClient = true
    }
  }

}
</script>
