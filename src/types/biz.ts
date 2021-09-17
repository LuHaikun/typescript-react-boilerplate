/**
 * @author 陆海鹍
 * @date 2021-01-28 16:30:51
 * @description 描述 业务声明文件
 * @email luhaikun@cecdat.com
 * @copyright Copyright 2018 CEC(Fujian) Healthcare Big Data Operation Service Co., Ltd. All rights reserved.
 */
import React from 'react'
// 路由声明
export interface IRoute {
  path: string
  meta: {
    name: string
    icon?: string
  }
  exact?: boolean
  component: React.ElementType
  routes?: IRoute[]
}

export type SvgrComponent = React.StatelessComponent<
  React.SVGAttributes<SVGElement>
>
