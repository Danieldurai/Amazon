<template>
    <div class="container">
        <b-button class="add-entry-button" v-b-modal.modal-1 variant="success">+</b-button>

        <b-modal id="modal-1" title="Registration">
            <FormValidation  @customEvent="handleEvent"></FormValidation>
            <template #modal-footer>
                <!-- No ok-title and cancel-title attributes -->
                <b-button class="d-none" variant="warning">OK</b-button>
                <b-button class="d-none"  variant="secondary">Cancel</b-button>
            </template>
        </b-modal>
        <ag-grid-vue style="width: 70%; height: 70vh" class="ag-theme-alpine mx-auto mt-5" :columnDefs = "columnDefs" :rowData = "rowData" rowSelection = "multiple" @grid-ready="onGridReady" >

        </ag-grid-vue>
        <button @click="deleteSelectedRows()">Delete Rows</button>
        
    </div>
</template>

<script>
// import axios from "axios"
import FormValidation from "./FormValidation.vue"
import {AgGridVue} from "ag-grid-vue"

export default{
    name : "formComponent",
    data() {
        return{
            columnDefs : null,
            rowData : [],
            gridApi : null,
            columnApi : null
        }
    },
    methods:{
        handleEvent(data){
            this.rowData.push(data)
        },
        deleteSelectedRows(){
            const selectedNodes = this.gridApi.getSelectedNodes()
            const selectedData = selectedNodes.map((node)=>node.data)
            selectedData.forEach((selectedRow) => {
                console.log(selectedRow)
                const index = this.rowData.indexOf(selectedRow);
                if (index !== -1) {
                    this.rowData.splice(index, 1);
                }
                
            })
        },
        onGridReady(params){
            this.gridApi = params.api
            this.columnApi = params.columnApi
        }
    },

    components : {
        FormValidation,
        AgGridVue,
        
    },
    beforeMount(){
        // this.columnDefs = [
        //     {field : "id", sortable:true, filter:true},
        //     {field : "category", sortable:true, filter:true},
        //     {field : "title", sortable:true, filter:true},
        //     {field : "price", sortable:true, filter:true}
        // ];

        // axios.get("https://fakestoreapi.com/products").then((res)=>{
        //     this.rowData = res.data
        //     console.log(res.data)
        // })
        this.columnDefs = [
            {field : "name", sortable:true, filter:true, editable: true, checkboxSelection: true},
            {field : "email", sortable:true, filter:true, editable: true},
            {field : "location", sortable:true, filter:true, editable: true},
            {field : "contact", sortable:true, filter:true, editable: true},
            
        ];

    }
}
</script>

<style scoped>

@import "ag-grid-community/styles/ag-grid.css";
@import "ag-grid-community/styles/ag-theme-alpine.css";

.add-entry-button{
    padding: 0;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: fixed;
    bottom: 30px;
    right: 20px;
    font-size: 2.5rem;
}


</style>