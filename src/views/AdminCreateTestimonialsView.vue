<template>
    <div>
        <form >    
            <div>
                <label>Name</label>
                <input 
                    type="text" 
                    v-model="form.title"
                    required 
                />
            </div>

            <div>
                <label>Task</label>
                <input 
                    type="text"
                    v-model="form.date"
                    required
                />
            </div>

            <div>
                <label>Task</label>
                <input 
                    type="text"
                    v-model="form.description"
                    required
                />
            </div>
            
            <div>
                <label>Task</label>
                <input 
                    type="text"
                    v-model="form.place"
                    required
                />
            </div>

            <button type="submit" class="btn btn-success mt-3">
                Create Project
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>