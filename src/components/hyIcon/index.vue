<a-col span="24" v-if="false">
<div id="searchInputPanle" style="display: flex;justify-content: space-between;flex-wrap: wrap">
  <div style="display: flex;justify-content:space-between;margin-bottom:10px">
    <div style="min-width:150px;margin-right:6px">
      <luim-shop-list v-model="model.params.storeId" style="width:100%" @onSearch="initPage">
      </luim-shop-list>
    </div>
    <div style="width:100px;margin-right:6px">
      <a-select v-model:value="model.params.source" :allowClear="true" :disabled="store.state.loading"
                optionFilterProp="label" placeholder="请选择渠道" show-search style="width:100%" @change="clickSearch">
        <a-select-option v-for="(item, index) in platformList" :key="index" :label="item.name"
                         :value="item.value">
          {{ item.name }}
        </a-select-option>
      </a-select>
    </div>
    <div style="display: flex;;align-items: center;margin-right:6px">
      <div style="width:120px">
        <a-input v-model:value="state.model.params.storeGoodsId" :disabled="store.state.loading"
                 placeholder="宝贝ID" @keyup.enter.native="clickSearch">
        </a-input>
      </div>
    </div>
    <div style="display: flex;align-items: center;margin-right:6px">
      <div style="width:120px">
        <a-input v-model:value="state.model.params.productCode" :disabled="store.state.loading"
                 placeholder="商家编码"
                 @keyup.enter.native="clickSearch">
        </a-input>
      </div>
    </div>
    <div id="disabledSelect" style="width:120px;margin-right:6px">
      <a-select v-model:value="state.model.params.disabled" allow-clear placeholder="不限禁用状态"
                style="width:100%"
                @change="clickSearch">
        <a-select-option value="">不限禁用状态</a-select-option>
        <a-select-option value="true">已禁用</a-select-option>
        <a-select-option value="false">正常</a-select-option>
      </a-select>
    </div>
    <div id="priceLimitedSelect" style="width:120px;margin-right:6px">
      <a-select v-model:value="state.model.params.storePriceLimited" allow-clear placeholder="不限限价状态"
                style="width:100%" @change="clickSearch">
        <a-select-option value="">不限限价状态</a-select-option>
        <a-select-option value="true">已限价</a-select-option>
        <a-select-option value="false">未限价</a-select-option>
      </a-select>
    </div>
    <div id="activeSelect" style="width:120px;margin-right:6px">
      <a-select v-model:value="state.model.params.active" :disabled="store.state.loading" allow-clear
                placeholder="不限活跃状态" style="width:100%" @change="clickSearch">
        <a-select-option value="">不限活跃状态</a-select-option>
        <a-select-option value="true">活跃</a-select-option>
        <a-select-option value="false">不活跃</a-select-option>
      </a-select>
    </div>
    <div id="checkedList1" style="width:320px;margin-right:6px;padding-top:7px">
      <a-space :size="10">
        <a-checkbox v-model:checked="state.model.params.quantityGt" @change="changeFilterkc">过滤零库存
        </a-checkbox>

        <a-checkbox v-model:checked="state.model.params.sweepsFlag" style="margin-left: -5px"
                    @change="changeFilterdisible">
          防扫货禁用
        </a-checkbox>

        <a-checkbox v-model:checked="state.model.params.initFlag" style="margin-left: -5px"
                    @change="changeFilterinit">
          初始化
        </a-checkbox>
      </a-space>
    </div>
    <div id="searchMenu">

      <a-button :disabled="store.state.loading" type="primary" @click="clickSearch">
        <template #icon>
          <SearchOutlined/>
        </template>
        搜索
      </a-button>
    </div>
    <div>

      <a-button :disabled="store.state.loading" type="default" @click="clickReset">
        <template #icon>
          <ReloadOutlined/>
        </template>
        重置
      </a-button>
    </div>
  </div>
  <div id="menuOptions">
    <div style="display: flex;align-items:end;flex:1">

      <a-button :disabled="store.state.loading" @click="clickfilterAsync">
        <template #icon>
          <funnel-plot-outlined :style="{ color: '#F08080' }"/>
        </template>
        同步过滤
      </a-button>

      <a-dropdown :disabled="store.state.loading">
        <a-button>
          <funnel-plot-outlined :style="{ color: '#1E90FF' }"/>
          库存过滤
          <DownOutlined/>
        </a-button>
        <template #overlay>
          <a-menu>
            <a-menu-item @click="clickAsyncTable">
              <table-outlined :style="{ color: 'blue' }"/>
              <a href="javascript:;">库存同步过滤表</a>
            </a-menu-item>
            <a-menu-item @click="clickDisableImport">
              <stop-outlined :style="{ color: 'red' }"/>
              <a href="javascript:;">禁用本地库存</a>
            </a-menu-item>
            <a-menu-item @click="clickEnbleImport">
              <key-outlined :style="{ color: 'green' }"/>
              <a href="javascript:;">解禁本地库存</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</div>
<div id="selectPanles"
     style="padding-bottom: 10px; padding-top: 10px;display: flex;justify-content: space-between">
  <div style="display:flex">
    <div id="selectstatus2">

      <div style="width:120px;margin-right:6px">
        <a-select v-model:value="state.model.params.disabled" allow-clear placeholder="不限禁用状态"
                  style="width:100%"
                  @change="clickSearch">
          <a-select-option value="">不限禁用状态</a-select-option>
          <a-select-option value="true">已禁用</a-select-option>
          <a-select-option value="false">正常</a-select-option>
        </a-select>
      </div>

      <div style="width:120px;margin-right:6px">
        <a-select v-model:value="state.model.params.storePriceLimited" allow-clear placeholder="不限限价状态"
                  style="width:100%" @change="clickSearch">
          <a-select-option value="">不限限价状态</a-select-option>
          <a-select-option value="true">已限价</a-select-option>
          <a-select-option value="false">未限价</a-select-option>
        </a-select>
      </div>

      <div style="width:120px;margin-right:6px;">
        <a-select v-model:value="state.model.params.active" allow-clear placeholder="不限活跃状态"
                  style="width:100%"
                  @change="clickSearch">
          <a-select-option value="">不限活跃状态</a-select-option>
          <a-select-option value="true">活跃</a-select-option>
          <a-select-option value="false">不活跃</a-select-option>
        </a-select>
      </div>
    </div>
    <div id="checkedList2" style="padding-top:7px">
      <a-checkbox v-model:checked="state.model.params.quantityGt" @change="changeFilterkc">过滤零库存
      </a-checkbox>
      <a-checkbox v-model:checked="state.model.params.sweepsFlag" @change="changeFilterdisible">防扫货禁用
      </a-checkbox>
      <a-checkbox v-model:checked="state.model.params.initFlag" @change="changeFilterinit">初始化</a-checkbox>
    </div>
  </div>
  <div>
    <div>
      <a-button v-if="selectedRowKey.length > 0" :disabled="store.state.loading" size="small"
                @click="clickDeletes">
        <template #icon>
          <delete-outlined :style="{ color: '#FF0000' }"/>
        </template>
        批量删除({{ selectedRowKey.length }})
      </a-button>

      <a-button v-if="selectedRowKey.length > 0" :disabled="store.state.loading" size="small"
                @click="clickAsyncCloud">
        <template #icon>
          <CloudSyncOutlined :style="{ color: '#4164e0' }"/>
        </template>
        批量同步({{ selectedRowKey.length }})
      </a-button>

      <a-button :disabled="store.state.loading" size="small" @click="clickStopShop">
        <lock-outlined :style="{ color: '#DC143C' }"/>
        一键禁用
      </a-button>

      <a-button :disabled="store.state.loading" size="small" @click="clickEnbleShop">
        <unlock-outlined :style="{ color: '#008B8B' }"/>
        一键解禁
      </a-button>

      <a-button :disabled="store.state.loading" size="small" @click="clickImportPrice">
        <import-outlined :style="{ color: '#FF4500' }"/>
        导入限价
      </a-button>

      <a-dropdown :disabled="store.state.loading">
        <a-button size="small">
          <span class="iconfont icon-export exportIcon"></span>
          导出
          <DownOutlined/>
        </a-button>
        <template #overlay>
          <a-menu>
            <a-menu-item @click="clickProductExport">
              <export-outlined :style="{ color: '#1E90FF' }"/>
              <a href="javascript:;">商品导出</a>
            </a-menu-item>
            <a-menu-item @click="clickDuplicateExport">
              <export-outlined :style="{ color: '#1E90FF' }"/>
              <a href="javascript:;">去重导出</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</div>
</a-col>
<script setup lang="ts">
      </script>
