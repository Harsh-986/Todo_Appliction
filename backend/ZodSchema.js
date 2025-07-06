const {z} = require('zod');

const infoSchema = z.object({
    title : z.string(),
    description : z.string(),
    
})

const updateSchema = z.object({
    id : z.string(),
})


module.exports = {
    infoSchema : infoSchema,
    updateSchema : updateSchema  
}