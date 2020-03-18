通过 TODOList 来学习redux、react-redux、redux-saga、dvajs

这个小demo一共写了5个组件，也是5个 TODOList 。分别是：

* BasicPage：
  * 使用了组件状态(`state`) + 拦截请求(`Axios` + `Mockjs`) + 数据缓存(`localStorage`)。
  * 可以实现页面载入时，`Axios` 请求接口要求返回 TODOList 列表，`Mockjs` 拦截到请求后，从 `localStorage` 中获取对应的数据并返回。
  * 新增 TODO 也是同样的原理。
* ReduxPage：
  * 使用 `Redux` 实现全局数据，并在组件内设置监听器，通过 `store.getState()` 获取全局 `state`。
  * 新增 TODO 时，调用 `store.dispatch(action)`，`reducer` 接收到后，根据 `action` 中的 `type`，处理数据，并将新的 `state` 返回 `store` 。
  * 这个实现不包含异步请求或副作用。
* ReactReduxPage：

* ReduxSagaPage：

* DvajsPage：


``` bash
# 安装依赖
yarn

# 开发
yarn start

# 构建
yarn run build
```
