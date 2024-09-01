const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .reject((err)=>next(err))
    }
}

export default asyncHandler;


// Another Approach i.e. using try catch

// const asyncHandler = (fn) => async (req, es, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 400).json({
//             success: false,
//             message: error.message
//         })
//     }
// }