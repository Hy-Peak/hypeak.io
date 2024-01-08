    <luim-header :rightStyle="{}">
      <template #left>
        <a-space></a-space>
      </template>
      <template #right>
        <a-space></a-space>
      </template>
    </luim-header>
mj-menu-container
<a-row v-if="false">
<a-col span="24">
<div class="flex betweenX">
<div class="tag-search-panel" style="padding-left: 10px">
<span style="padding-top: 7px;padding-right: 10px">订单状态:</span>
<div class="tag-item" :class="[state.queryInfo.currStates == '' ? 'current' : '']"
@click="clickStatusFilter('')">
全部
</div>
<div class="tag-item" :class="[state.queryInfo.currStates == 'DRAFT' ? 'current' : '']"
@click="clickStatusFilter('DRAFT')">草稿<span class="flag"><span
style="background-color: #2A00FF; border-color: #ffffff;"></span></span></div>
<div class="tag-item" :class="[state.queryInfo.currStates == 'PAID' ? 'current' : '']"
@click="clickStatusFilter('PAID')">已付款<span class="flag"><span
style="background-color: #0075bd; border-color: #ffffff;"></span></span></div>
<div class="tag-item" @click="clickStatusFilter('PICKING')"
:class="[state.queryInfo.currStates == 'PICKING' || state.queryInfo.currStates == 'PICKUP_DONE' || state.queryInfo.currStates == 'PICKING_UP' ? 'current' : '']">
配货中<span class="flag"><span style="background-color: #2a00ff; border-color: #ffffff;"></span><span
style="background-color: #ff652f; border-color: #ffffff;"></span><span
style="background-color: #198d26; border-color: #ffffff;"></span></span></div>
<div class="tag-item" :class="[state.queryInfo.currStates == 'PRINTED' ? 'current' : '']"
@click="clickStatusFilter('PRINTED')">反馈成功<span class="flag"><span
style="background-color: #65A946; border-color: #ffffff;"></span></span></div>
<div class="tag-item" :class="[state.queryInfo.currStates == 'DELIVERED' ? 'current' : '']"
@click="clickStatusFilter('DELIVERED')">已发货<span class="flag"><span
style="background-color: #198d26; border-color: #ffffff;"></span></span></div>
<div class="tag-item" :class="[state.queryInfo.currStates == 'PICKING_FAILURE' ? 'current' : '']"
@click="clickStatusFilter('PICKING_FAILURE')">反馈失败<span class="flag"><span
style="background-color: #E9AF16; border-color: #ffffff;"></span></span></div>
<div class="tag-item" :class="[state.queryInfo.currStates == 'REFUNDING' ? 'current' : '']"
@click="clickStatusFilter('REFUNDING')">退款中<span class="flag"><span
style="background-color: red; border-color: #ffffff;"></span></span></div>
<div class="tag-item" :class="[state.queryInfo.currStates == 'REFUNDED' ? 'current' : '']"
@click="clickStatusFilter('REFUNDED')">已退款<span class="flag"><span
style="background-color: #59a4ff; border-color: #ffffff;"></span></span></div>

            <a-select style="width: 160px;margin-left: 50px;margin-right: 10px"
              v-model:value="state.queryInfo.lackGoodsStatus" @change="clickSearch">
              <a-select-option value="">不限缺货标记状态</a-select-option>
              <a-select-option value="1">未标记通知缺货</a-select-option>
              <a-select-option value="2">已通知标记缺货</a-select-option>
              <a-select-option value="3">已多次通知标记缺货</a-select-option>
            </a-select>

            <a-select style="width: 160px" v-model:value="state.queryInfo.informBuyerStatus" @change="clickSearch">
              <a-select-option value="">不限买家调货状态</a-select-option>
              <a-select-option value="0">未标记</a-select-option>
              <a-select-option value="1">未通知买家调货</a-select-option>
              <a-select-option value="2">已通知买家调货</a-select-option>
              <a-select-option value="3">已多次通知买家调货</a-select-option>
            </a-select>
          </div>
          <div>
            <a-tooltip color="#ffffff" placement="topRight">
              <template #title>
                <flag-detail />
              </template>
              <a-button type="link" style="color: #333333">
                <template #icon>
                  <em class="iconfont icon-qizi luim-icon-flag flag5"
                    style="font-size: 18px !important;padding-right: 5px"></em>
                </template>
                旗帜释义
              </a-button>
            </a-tooltip>
            <a-button type="link" style="color:#333333" @click="clickPurpleFlag">
              <template #icon>
                <em class="iconfont icon-qizi luim-icon-flag flag5"
                  style="font-size: 18px !important;padding-right: 5px"></em>
              </template>
              订单紫旗率
            </a-button>
          </div>
        </div>
        <div class="luim-flex" style="margin-top: 10px">
          <div class="inputPanle" style="padding-left: 10px">
            <span style="padding-right:6px;padding-top:7px">销售渠道:</span>
            <div class="input-item">
              <luim-shop-list style="width:100%" v-model="state.queryInfo.saleChannelId"
                @onSearch="clickSearch"></luim-shop-list>
            </div>
            <span style="padding-right:6px;padding-top:7px">渠道状态:</span>
            <div class="input-item" style="width:130px">
              <a-select v-model:value="state.queryInfo.originState" placeholder="平台状态" style="width:100%" show-search
                allow-clear option-filter-prop="label" @change="clickSearch">

                <a-select-option value="WAIT_BUYER_PAY" label="等待买家付款">
                  等待买家付款
                </a-select-option>
                <a-select-option value="WAIT_SELLER_SEND_GOODS" label="买家已付款">
                  买家已付款
                </a-select-option>
                <a-select-option value="WAIT_BUYER_CONFIRM_GOODS" label="卖家已发货">
                  卖家已发货
                </a-select-option>
                <a-select-option value="SELLER_CONSIGNED_PART" label="卖家部分发货">
                  卖家部分发货
                </a-select-option>
                <a-select-option value="TRADE_BUYER_SIGNED" label="买家已签收">
                  买家已签收
                </a-select-option>
                <a-select-option value="TRADE_FINISHED" label="交易成功">
                  交易成功
                </a-select-option>

              </a-select>
            </div>
            <div class="input-item">
              <a-select v-model:value="state.queryInfo.pickingSource" placeholder="全部平台" style="width:110px" show-search
                @change="clickSearch" allow-clear option-filter-prop="label">
                <a-select-option v-for="(item, index) in platformList" :key="index" :label="item.name"
                  :value="item.value">
                  {{ item.name }}
                </a-select-option>
                <a-select-option value="DIAOHUO">调货</a-select-option>
              </a-select>
            </div>
            <span style="padding-right:6px;padding-top:7px">订单日期:</span>
            <div class="input-item" style="width:230px">
              <luim-data-range-picker :allowClear="true" v-model="orderTimeSpan" style="width:100%" />
            </div>

            <div class="input-item" :style="{ width: sourceType ? '260px' : '160px' }">
              <div class="flex">
                <a-select v-if="sourceType" style="width: 150px" v-model:value="state.queryInfo.storeType">
                  <a-select-option value="TAOBAO">淘系</a-select-option>
                  <a-select-option value="DY_MYJO">抖音麦巨</a-select-option>
                  <a-select-option value="DY_WANYUAN">抖音万源</a-select-option>
                  <a-select-option value="PINDUODUO">拼多多</a-select-option>
                </a-select>
                <a-input placeholder="收件人手机号查询" :readonly="sourceType == false" @click="clickShowMobile"
                  v-model:value="state.queryInfo.nameOrMobile" style="cursor: pointer">
                  <template #addonAfter v-if="sourceType">
                    <close-circle-outlined @click="clickClearPhone" />
                  </template>
                </a-input>
              </div>

            </div>
            <div class="input-item">
              <a-select placeholder="识货订单筛选" style="width:132px" v-model:value="orderSpecialType"
                @change="clickSearchorderSpecialType">
                <a-select-option value="">识货订单筛选</a-select-option>
                <a-select-option value="1,2">全部识货订单</a-select-option>
                <a-select-option value="1">识货普通订单</a-select-option>
                <a-select-option value="2">识货优选订单</a-select-option>
              </a-select>
            </div>
            <div class="input-item">
              <a-select placeholder="不限分配人" style="width: 100px" v-model:value="state.queryInfo.soAssignee"
                @change="clickSearch">
                <a-select-option value="">不限分配人</a-select-option>
                <a-select-option value="10177">A组</a-select-option>
                <a-select-option value="10179">B组</a-select-option>
                <a-select-option value="10180">C组</a-select-option>
              </a-select>
            </div>

          </div>
          <div class="menuPanle">
            <a-row>
              <a-col>
                <a-button :disabled="store.state.loading" type="primary"
                  style="margin-right: 10px;background: #ec6800;border:1px solid #ec6800;color: #ffffff"
                  @click="clickSearch">
                  <template #icon>
                    <SearchOutlined />
                  </template>
                  查询
                </a-button>
              </a-col>
              <a-col>
                <a-button :disabled="store.state.loading" type="default" @click="clickReset">
                  <template #icon>
                    <ReloadOutlined />
                  </template>
                  重置
                </a-button>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
    </a-row>
