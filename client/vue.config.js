module.exports = {
  devServer: {
    // these requests from the client to '/api/states'
    // get sent to proxy address/api/states
    proxy: 'http://127.0.0.1:3000'
  }
}
