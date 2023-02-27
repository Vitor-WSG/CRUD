<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-dark text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title align="center" class="text-grey-5">
          <q-avatar>
            <q-icon name="admin_panel_settings" size="xl"></q-icon>
          </q-avatar>
          Painel Administrativo
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="left" inline-label v-model="tab" active-color="red-6" indicator-color="red-6">
        <q-tab name="product" icon="inventory_2" label="Produtos" />
        <q-tab name="client" icon="groups" label="Clientes" />
        <q-tab name="category" icon="category" label="Categorias" />
        <q-tab name="order" icon="list_alt" label="Pedidos" />
      </q-tabs>
    </q-header>


    <q-tab-panels v-model="tab" animated style="position:fixed; top:13%; width: 100%;">
      <q-tab-panel name="product">
        <ProductIndex></ProductIndex>
      </q-tab-panel>

      <q-tab-panel name="client">
        <ClientIndex></ClientIndex>
      </q-tab-panel>

      <q-tab-panel name="category">
        <CategoryIndex></CategoryIndex>
      </q-tab-panel>

      <q-tab-panel name="order">
        <OrderIndexVue></OrderIndexVue>
      </q-tab-panel>
    </q-tab-panels>

    <q-footer class="bg-dark text-white">
      <q-toolbar>
        <small>copyright &copy; 2023</small>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import ProductIndex from 'components/Products/ProductIndex.vue'
import ClientIndex from 'components/Clients/ClientIndex.vue'
import CategoryIndex from 'components/Category/CategoryIndex.vue'
import OrderIndexVue from 'components/Orders/OrderIndex.vue'

export default {
  name: 'IndexPage',
  components: {
    ProductIndex,
    ClientIndex,
    CategoryIndex,
    OrderIndexVue
  },
  data() {
    return {
      tab: ref ('product')
    }
  }

}
</script>
