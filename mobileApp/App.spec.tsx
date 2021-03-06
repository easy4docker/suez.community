import React from "react"
import renderer from "react-test-renderer"

import App from "./App.tsx"

describe("<App />", () => {
  it("has 2 child", () => {
    const tree: any = renderer.create(<App />).toJSON()
    expect(tree?.children?.length).toBe(2)
  })

  xit("matches last snapshot", async () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
})
