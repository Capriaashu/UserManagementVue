<template>
    <div class="full-page-layout">
        <div class="mh-90">
            <table id="tableComponent" class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <!-- loop through each value of the fields to get the table header -->
                        <th v-for="field in fields" :key="field" @click="sortTable(field)">
                            {{ camalize(field) }}
                            <fa :icon="sortIcons[field]" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Loop through the list get the each  data -->
                    <tr v-for="item in dataList" :key='item'>
                        <td v-for="field in fields" :key='field'>{{ item[field] }}</td>
                        <td>
                            <button @click="editRowData(item.id)">Edit</button>
                            <button @click="deleteRowData(item.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableComponent',
    props: {
        // 
        dataList: {
            type: Array,
        },
        fields: {
            type: Array,
        },
    },
    data() {
        return {
            sortedDataList: this.dataList,
            sortField: '', // Track the field used for sorting
            sortDirection: 'asc', // Track the sorting direction ('asc' or 'desc')
        };
    },
    methods: {
        editRowData: function (data) {
            this.$emit('editRowData', data);
        },
        deleteRowData: function (data) {
            this.$emit('deleteRowData', data);
        },
        camalize: function (str) {
            return (" " + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
                return chr.toUpperCase();
            });
        },
        sortTable(field) {
            if (this.sortField === field) {
                // If the same field is clicked again, reverse the sort direction
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                // If a new field is clicked, set the sort field and direction
                this.sortField = field;
                this.sortDirection = 'asc';
            }

            // Sort the dataList based on the sort field and direction
            this.sortedDataList = this.dataList.sort((a, b) => {
                const aValue = a[this.sortField];
                const bValue = b[this.sortField];

                if (typeof aValue === 'number' && typeof bValue === 'number') {
                    // If both values are numbers, perform numeric comparison
                    return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
                } else {
                    // If either value is not a number, perform a string comparison
                    if (this.sortDirection === 'asc') {
                        return String(aValue).localeCompare(String(bValue));
                    } else {
                        return String(bValue).localeCompare(String(aValue));
                    }
                }
            });
        },
    },
    computed: {
        sortIcons() {
            const icons = {};
            for (const field of this.fields) {
                if (this.sortField === field) {
                    icons[field] = this.sortDirection === "asc" ? "arrow-up-a-z" : "arrow-down-z-a";
                } else {
                    icons[field] = "arrow-up-a-z";
                }
            }
            return icons;
        },
    },
}
</script>

<style>
.full-page-layout {
    display: flex;
    flex-direction: column;
}

.mh-90 {
    flex: 1;
    /* Allow the table component to grow and occupy remaining vertical space */
    height: 90%;
}
</style>
