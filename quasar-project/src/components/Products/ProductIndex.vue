<template>
  <div class="q-pa-xs q-ma-xs">
    <q-table title="teste" hide-pagination :rows="rows" :columns="columns">
      <template v-slot:top>
        <div class="col-xs-6" align="left">
          <div class="text-h6">Produtos</div>
        </div>
        <div class="col-xs-6" align="right">
          <q-btn color="primary" push label="Cadastrar" no-caps icon="add" @click="goToCreateProduct()"></q-btn>
        </div>

      </template>

      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn class="glossy" size="sm" no-caps push icon="edit" color="dark" label="Editar" />
            <q-btn class="glossy" size="sm" no-caps push icon="delete" color="red" label="Excluir" @click="goToDeleteProduct()"/>
          </div>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="createProduct" persistent >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center">
          <div class="text-h6">Cadastrar produto</div>
        </q-card-section>

        <q-card-section class="row items-center q-col-gutter-md">
          <div class="col-xs-4">
            <q-input outlined label="Código do produto"></q-input>
          </div>
          <div class="col-xs-8">
            <q-input outlined label="Descrição do produto"></q-input>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn push no-caps icon="save" label="Salvar" color="primary" />
          <q-btn push no-caps icon="cancel" label="Cancelar" color="black" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="deleteProduct" persistent>
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
  name: 'ProductIndex',
  data() {
    return {
      deleteProduct: false,
      createProduct: false,
      rows: [],
      columns: [
      { align:'left', name: 'userId', label: 'Código', field: 'userId' },
        { align: 'left', name: 'title', label: 'Descrição', field: 'title' },
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

    goToCreateProduct() {
      this.createProduct = true
    },

    goToDeleteProduct() {
      this.deleteProduct = true
    }
  }

}
</script>
