/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAksNpVirtualNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#availability_zones OceanAksNpVirtualNodeGroup#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#enable_node_public_ip OceanAksNpVirtualNodeGroup#enable_node_public_ip}
  */
  readonly enableNodePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#fallback_to_ondemand OceanAksNpVirtualNodeGroup#fallback_to_ondemand}
  */
  readonly fallbackToOndemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#id OceanAksNpVirtualNodeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#kubernetes_version OceanAksNpVirtualNodeGroup#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#labels OceanAksNpVirtualNodeGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#max_count OceanAksNpVirtualNodeGroup#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#max_pods_per_node OceanAksNpVirtualNodeGroup#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#min_count OceanAksNpVirtualNodeGroup#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#name OceanAksNpVirtualNodeGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#ocean_id OceanAksNpVirtualNodeGroup#ocean_id}
  */
  readonly oceanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#os_disk_size_gb OceanAksNpVirtualNodeGroup#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#os_disk_type OceanAksNpVirtualNodeGroup#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#os_sku OceanAksNpVirtualNodeGroup#os_sku}
  */
  readonly osSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#os_type OceanAksNpVirtualNodeGroup#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#pod_subnet_ids OceanAksNpVirtualNodeGroup#pod_subnet_ids}
  */
  readonly podSubnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#spot_percentage OceanAksNpVirtualNodeGroup#spot_percentage}
  */
  readonly spotPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#tags OceanAksNpVirtualNodeGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#vnet_subnet_ids OceanAksNpVirtualNodeGroup#vnet_subnet_ids}
  */
  readonly vnetSubnetIds?: string[];
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#filters OceanAksNpVirtualNodeGroup#filters}
  */
  readonly filters?: OceanAksNpVirtualNodeGroupFilters;
  /**
  * headrooms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#headrooms OceanAksNpVirtualNodeGroup#headrooms}
  */
  readonly headrooms?: OceanAksNpVirtualNodeGroupHeadrooms[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#taints OceanAksNpVirtualNodeGroup#taints}
  */
  readonly taints?: OceanAksNpVirtualNodeGroupTaints[] | cdktf.IResolvable;
}
export interface OceanAksNpVirtualNodeGroupFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#accelerated_networking OceanAksNpVirtualNodeGroup#accelerated_networking}
  */
  readonly acceleratedNetworking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#architectures OceanAksNpVirtualNodeGroup#architectures}
  */
  readonly architectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#disk_performance OceanAksNpVirtualNodeGroup#disk_performance}
  */
  readonly diskPerformance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#exclude_series OceanAksNpVirtualNodeGroup#exclude_series}
  */
  readonly excludeSeries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#max_gpu OceanAksNpVirtualNodeGroup#max_gpu}
  */
  readonly maxGpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#max_memory_gib OceanAksNpVirtualNodeGroup#max_memory_gib}
  */
  readonly maxMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#max_vcpu OceanAksNpVirtualNodeGroup#max_vcpu}
  */
  readonly maxVcpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#min_disk OceanAksNpVirtualNodeGroup#min_disk}
  */
  readonly minDisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#min_gpu OceanAksNpVirtualNodeGroup#min_gpu}
  */
  readonly minGpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#min_memory_gib OceanAksNpVirtualNodeGroup#min_memory_gib}
  */
  readonly minMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#min_nics OceanAksNpVirtualNodeGroup#min_nics}
  */
  readonly minNics?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#min_vcpu OceanAksNpVirtualNodeGroup#min_vcpu}
  */
  readonly minVcpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#series OceanAksNpVirtualNodeGroup#series}
  */
  readonly series?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#vm_types OceanAksNpVirtualNodeGroup#vm_types}
  */
  readonly vmTypes?: string[];
}

export function oceanAksNpVirtualNodeGroupFiltersToTerraform(struct?: OceanAksNpVirtualNodeGroupFiltersOutputReference | OceanAksNpVirtualNodeGroupFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerated_networking: cdktf.stringToTerraform(struct!.acceleratedNetworking),
    architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.architectures),
    disk_performance: cdktf.stringToTerraform(struct!.diskPerformance),
    exclude_series: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeSeries),
    max_gpu: cdktf.numberToTerraform(struct!.maxGpu),
    max_memory_gib: cdktf.numberToTerraform(struct!.maxMemoryGib),
    max_vcpu: cdktf.numberToTerraform(struct!.maxVcpu),
    min_disk: cdktf.numberToTerraform(struct!.minDisk),
    min_gpu: cdktf.numberToTerraform(struct!.minGpu),
    min_memory_gib: cdktf.numberToTerraform(struct!.minMemoryGib),
    min_nics: cdktf.numberToTerraform(struct!.minNics),
    min_vcpu: cdktf.numberToTerraform(struct!.minVcpu),
    series: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.series),
    vm_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vmTypes),
  }
}

export class OceanAksNpVirtualNodeGroupFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNpVirtualNodeGroupFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratedNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedNetworking = this._acceleratedNetworking;
    }
    if (this._architectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectures = this._architectures;
    }
    if (this._diskPerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPerformance = this._diskPerformance;
    }
    if (this._excludeSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSeries = this._excludeSeries;
    }
    if (this._maxGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGpu = this._maxGpu;
    }
    if (this._maxMemoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryGib = this._maxMemoryGib;
    }
    if (this._maxVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVcpu = this._maxVcpu;
    }
    if (this._minDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDisk = this._minDisk;
    }
    if (this._minGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minGpu = this._minGpu;
    }
    if (this._minMemoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryGib = this._minMemoryGib;
    }
    if (this._minNics !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNics = this._minNics;
    }
    if (this._minVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVcpu = this._minVcpu;
    }
    if (this._series !== undefined) {
      hasAnyValues = true;
      internalValueResult.series = this._series;
    }
    if (this._vmTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmTypes = this._vmTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpVirtualNodeGroupFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratedNetworking = undefined;
      this._architectures = undefined;
      this._diskPerformance = undefined;
      this._excludeSeries = undefined;
      this._maxGpu = undefined;
      this._maxMemoryGib = undefined;
      this._maxVcpu = undefined;
      this._minDisk = undefined;
      this._minGpu = undefined;
      this._minMemoryGib = undefined;
      this._minNics = undefined;
      this._minVcpu = undefined;
      this._series = undefined;
      this._vmTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratedNetworking = value.acceleratedNetworking;
      this._architectures = value.architectures;
      this._diskPerformance = value.diskPerformance;
      this._excludeSeries = value.excludeSeries;
      this._maxGpu = value.maxGpu;
      this._maxMemoryGib = value.maxMemoryGib;
      this._maxVcpu = value.maxVcpu;
      this._minDisk = value.minDisk;
      this._minGpu = value.minGpu;
      this._minMemoryGib = value.minMemoryGib;
      this._minNics = value.minNics;
      this._minVcpu = value.minVcpu;
      this._series = value.series;
      this._vmTypes = value.vmTypes;
    }
  }

  // accelerated_networking - computed: false, optional: true, required: false
  private _acceleratedNetworking?: string; 
  public get acceleratedNetworking() {
    return this.getStringAttribute('accelerated_networking');
  }
  public set acceleratedNetworking(value: string) {
    this._acceleratedNetworking = value;
  }
  public resetAcceleratedNetworking() {
    this._acceleratedNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingInput() {
    return this._acceleratedNetworking;
  }

  // architectures - computed: false, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return cdktf.Fn.tolist(this.getListAttribute('architectures'));
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
  }

  // disk_performance - computed: false, optional: true, required: false
  private _diskPerformance?: string; 
  public get diskPerformance() {
    return this.getStringAttribute('disk_performance');
  }
  public set diskPerformance(value: string) {
    this._diskPerformance = value;
  }
  public resetDiskPerformance() {
    this._diskPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPerformanceInput() {
    return this._diskPerformance;
  }

  // exclude_series - computed: false, optional: true, required: false
  private _excludeSeries?: string[]; 
  public get excludeSeries() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_series'));
  }
  public set excludeSeries(value: string[]) {
    this._excludeSeries = value;
  }
  public resetExcludeSeries() {
    this._excludeSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSeriesInput() {
    return this._excludeSeries;
  }

  // max_gpu - computed: false, optional: true, required: false
  private _maxGpu?: number; 
  public get maxGpu() {
    return this.getNumberAttribute('max_gpu');
  }
  public set maxGpu(value: number) {
    this._maxGpu = value;
  }
  public resetMaxGpu() {
    this._maxGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGpuInput() {
    return this._maxGpu;
  }

  // max_memory_gib - computed: false, optional: true, required: false
  private _maxMemoryGib?: number; 
  public get maxMemoryGib() {
    return this.getNumberAttribute('max_memory_gib');
  }
  public set maxMemoryGib(value: number) {
    this._maxMemoryGib = value;
  }
  public resetMaxMemoryGib() {
    this._maxMemoryGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryGibInput() {
    return this._maxMemoryGib;
  }

  // max_vcpu - computed: false, optional: true, required: false
  private _maxVcpu?: number; 
  public get maxVcpu() {
    return this.getNumberAttribute('max_vcpu');
  }
  public set maxVcpu(value: number) {
    this._maxVcpu = value;
  }
  public resetMaxVcpu() {
    this._maxVcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVcpuInput() {
    return this._maxVcpu;
  }

  // min_disk - computed: false, optional: true, required: false
  private _minDisk?: number; 
  public get minDisk() {
    return this.getNumberAttribute('min_disk');
  }
  public set minDisk(value: number) {
    this._minDisk = value;
  }
  public resetMinDisk() {
    this._minDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDiskInput() {
    return this._minDisk;
  }

  // min_gpu - computed: false, optional: true, required: false
  private _minGpu?: number; 
  public get minGpu() {
    return this.getNumberAttribute('min_gpu');
  }
  public set minGpu(value: number) {
    this._minGpu = value;
  }
  public resetMinGpu() {
    this._minGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minGpuInput() {
    return this._minGpu;
  }

  // min_memory_gib - computed: false, optional: true, required: false
  private _minMemoryGib?: number; 
  public get minMemoryGib() {
    return this.getNumberAttribute('min_memory_gib');
  }
  public set minMemoryGib(value: number) {
    this._minMemoryGib = value;
  }
  public resetMinMemoryGib() {
    this._minMemoryGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryGibInput() {
    return this._minMemoryGib;
  }

  // min_nics - computed: false, optional: true, required: false
  private _minNics?: number; 
  public get minNics() {
    return this.getNumberAttribute('min_nics');
  }
  public set minNics(value: number) {
    this._minNics = value;
  }
  public resetMinNics() {
    this._minNics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNicsInput() {
    return this._minNics;
  }

  // min_vcpu - computed: false, optional: true, required: false
  private _minVcpu?: number; 
  public get minVcpu() {
    return this.getNumberAttribute('min_vcpu');
  }
  public set minVcpu(value: number) {
    this._minVcpu = value;
  }
  public resetMinVcpu() {
    this._minVcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVcpuInput() {
    return this._minVcpu;
  }

  // series - computed: false, optional: true, required: false
  private _series?: string[]; 
  public get series() {
    return cdktf.Fn.tolist(this.getListAttribute('series'));
  }
  public set series(value: string[]) {
    this._series = value;
  }
  public resetSeries() {
    this._series = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesInput() {
    return this._series;
  }

  // vm_types - computed: false, optional: true, required: false
  private _vmTypes?: string[]; 
  public get vmTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_types'));
  }
  public set vmTypes(value: string[]) {
    this._vmTypes = value;
  }
  public resetVmTypes() {
    this._vmTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTypesInput() {
    return this._vmTypes;
  }
}
export interface OceanAksNpVirtualNodeGroupHeadrooms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#cpu_per_unit OceanAksNpVirtualNodeGroup#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#gpu_per_unit OceanAksNpVirtualNodeGroup#gpu_per_unit}
  */
  readonly gpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#memory_per_unit OceanAksNpVirtualNodeGroup#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#num_of_units OceanAksNpVirtualNodeGroup#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function oceanAksNpVirtualNodeGroupHeadroomsToTerraform(struct?: OceanAksNpVirtualNodeGroupHeadrooms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_per_unit: cdktf.numberToTerraform(struct!.cpuPerUnit),
    gpu_per_unit: cdktf.numberToTerraform(struct!.gpuPerUnit),
    memory_per_unit: cdktf.numberToTerraform(struct!.memoryPerUnit),
    num_of_units: cdktf.numberToTerraform(struct!.numOfUnits),
  }
}

export class OceanAksNpVirtualNodeGroupHeadroomsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OceanAksNpVirtualNodeGroupHeadrooms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPerUnit = this._cpuPerUnit;
    }
    if (this._gpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPerUnit = this._gpuPerUnit;
    }
    if (this._memoryPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryPerUnit = this._memoryPerUnit;
    }
    if (this._numOfUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfUnits = this._numOfUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpVirtualNodeGroupHeadrooms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuPerUnit = undefined;
      this._gpuPerUnit = undefined;
      this._memoryPerUnit = undefined;
      this._numOfUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuPerUnit = value.cpuPerUnit;
      this._gpuPerUnit = value.gpuPerUnit;
      this._memoryPerUnit = value.memoryPerUnit;
      this._numOfUnits = value.numOfUnits;
    }
  }

  // cpu_per_unit - computed: false, optional: true, required: false
  private _cpuPerUnit?: number; 
  public get cpuPerUnit() {
    return this.getNumberAttribute('cpu_per_unit');
  }
  public set cpuPerUnit(value: number) {
    this._cpuPerUnit = value;
  }
  public resetCpuPerUnit() {
    this._cpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerUnitInput() {
    return this._cpuPerUnit;
  }

  // gpu_per_unit - computed: false, optional: true, required: false
  private _gpuPerUnit?: number; 
  public get gpuPerUnit() {
    return this.getNumberAttribute('gpu_per_unit');
  }
  public set gpuPerUnit(value: number) {
    this._gpuPerUnit = value;
  }
  public resetGpuPerUnit() {
    this._gpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPerUnitInput() {
    return this._gpuPerUnit;
  }

  // memory_per_unit - computed: false, optional: true, required: false
  private _memoryPerUnit?: number; 
  public get memoryPerUnit() {
    return this.getNumberAttribute('memory_per_unit');
  }
  public set memoryPerUnit(value: number) {
    this._memoryPerUnit = value;
  }
  public resetMemoryPerUnit() {
    this._memoryPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPerUnitInput() {
    return this._memoryPerUnit;
  }

  // num_of_units - computed: false, optional: true, required: false
  private _numOfUnits?: number; 
  public get numOfUnits() {
    return this.getNumberAttribute('num_of_units');
  }
  public set numOfUnits(value: number) {
    this._numOfUnits = value;
  }
  public resetNumOfUnits() {
    this._numOfUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfUnitsInput() {
    return this._numOfUnits;
  }
}

export class OceanAksNpVirtualNodeGroupHeadroomsList extends cdktf.ComplexList {
  public internalValue? : OceanAksNpVirtualNodeGroupHeadrooms[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OceanAksNpVirtualNodeGroupHeadroomsOutputReference {
    return new OceanAksNpVirtualNodeGroupHeadroomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAksNpVirtualNodeGroupTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#effect OceanAksNpVirtualNodeGroup#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#key OceanAksNpVirtualNodeGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#value OceanAksNpVirtualNodeGroup#value}
  */
  readonly value: string;
}

export function oceanAksNpVirtualNodeGroupTaintsToTerraform(struct?: OceanAksNpVirtualNodeGroupTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class OceanAksNpVirtualNodeGroupTaintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OceanAksNpVirtualNodeGroupTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNpVirtualNodeGroupTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OceanAksNpVirtualNodeGroupTaintsList extends cdktf.ComplexList {
  public internalValue? : OceanAksNpVirtualNodeGroupTaints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OceanAksNpVirtualNodeGroupTaintsOutputReference {
    return new OceanAksNpVirtualNodeGroupTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group spotinst_ocean_aks_np_virtual_node_group}
*/
export class OceanAksNpVirtualNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aks_np_virtual_node_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanAksNpVirtualNodeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanAksNpVirtualNodeGroup to import
  * @param importFromId The id of the existing OceanAksNpVirtualNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanAksNpVirtualNodeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_ocean_aks_np_virtual_node_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.155.0/docs/resources/ocean_aks_np_virtual_node_group spotinst_ocean_aks_np_virtual_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanAksNpVirtualNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: OceanAksNpVirtualNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_aks_np_virtual_node_group',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.155.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZones = config.availabilityZones;
    this._enableNodePublicIp = config.enableNodePublicIp;
    this._fallbackToOndemand = config.fallbackToOndemand;
    this._id = config.id;
    this._kubernetesVersion = config.kubernetesVersion;
    this._labels = config.labels;
    this._maxCount = config.maxCount;
    this._maxPodsPerNode = config.maxPodsPerNode;
    this._minCount = config.minCount;
    this._name = config.name;
    this._oceanId = config.oceanId;
    this._osDiskSizeGb = config.osDiskSizeGb;
    this._osDiskType = config.osDiskType;
    this._osSku = config.osSku;
    this._osType = config.osType;
    this._podSubnetIds = config.podSubnetIds;
    this._spotPercentage = config.spotPercentage;
    this._tags = config.tags;
    this._vnetSubnetIds = config.vnetSubnetIds;
    this._filters.internalValue = config.filters;
    this._headrooms.internalValue = config.headrooms;
    this._taints.internalValue = config.taints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // enable_node_public_ip - computed: false, optional: true, required: false
  private _enableNodePublicIp?: boolean | cdktf.IResolvable; 
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip');
  }
  public set enableNodePublicIp(value: boolean | cdktf.IResolvable) {
    this._enableNodePublicIp = value;
  }
  public resetEnableNodePublicIp() {
    this._enableNodePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNodePublicIpInput() {
    return this._enableNodePublicIp;
  }

  // fallback_to_ondemand - computed: false, optional: true, required: false
  private _fallbackToOndemand?: boolean | cdktf.IResolvable; 
  public get fallbackToOndemand() {
    return this.getBooleanAttribute('fallback_to_ondemand');
  }
  public set fallbackToOndemand(value: boolean | cdktf.IResolvable) {
    this._fallbackToOndemand = value;
  }
  public resetFallbackToOndemand() {
    this._fallbackToOndemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToOndemandInput() {
    return this._fallbackToOndemand;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kubernetes_version - computed: false, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // max_pods_per_node - computed: false, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ocean_id - computed: false, optional: false, required: true
  private _oceanId?: string; 
  public get oceanId() {
    return this.getStringAttribute('ocean_id');
  }
  public set oceanId(value: string) {
    this._oceanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oceanIdInput() {
    return this._oceanId;
  }

  // os_disk_size_gb - computed: false, optional: true, required: false
  private _osDiskSizeGb?: number; 
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }
  public set osDiskSizeGb(value: number) {
    this._osDiskSizeGb = value;
  }
  public resetOsDiskSizeGb() {
    this._osDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSizeGbInput() {
    return this._osDiskSizeGb;
  }

  // os_disk_type - computed: false, optional: true, required: false
  private _osDiskType?: string; 
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType;
  }

  // os_sku - computed: false, optional: true, required: false
  private _osSku?: string; 
  public get osSku() {
    return this.getStringAttribute('os_sku');
  }
  public set osSku(value: string) {
    this._osSku = value;
  }
  public resetOsSku() {
    this._osSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osSkuInput() {
    return this._osSku;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // pod_subnet_ids - computed: false, optional: true, required: false
  private _podSubnetIds?: string[]; 
  public get podSubnetIds() {
    return this.getListAttribute('pod_subnet_ids');
  }
  public set podSubnetIds(value: string[]) {
    this._podSubnetIds = value;
  }
  public resetPodSubnetIds() {
    this._podSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetIdsInput() {
    return this._podSubnetIds;
  }

  // spot_percentage - computed: false, optional: true, required: false
  private _spotPercentage?: number; 
  public get spotPercentage() {
    return this.getNumberAttribute('spot_percentage');
  }
  public set spotPercentage(value: number) {
    this._spotPercentage = value;
  }
  public resetSpotPercentage() {
    this._spotPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPercentageInput() {
    return this._spotPercentage;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vnet_subnet_ids - computed: false, optional: true, required: false
  private _vnetSubnetIds?: string[]; 
  public get vnetSubnetIds() {
    return this.getListAttribute('vnet_subnet_ids');
  }
  public set vnetSubnetIds(value: string[]) {
    this._vnetSubnetIds = value;
  }
  public resetVnetSubnetIds() {
    this._vnetSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetSubnetIdsInput() {
    return this._vnetSubnetIds;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new OceanAksNpVirtualNodeGroupFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: OceanAksNpVirtualNodeGroupFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // headrooms - computed: false, optional: true, required: false
  private _headrooms = new OceanAksNpVirtualNodeGroupHeadroomsList(this, "headrooms", true);
  public get headrooms() {
    return this._headrooms;
  }
  public putHeadrooms(value: OceanAksNpVirtualNodeGroupHeadrooms[] | cdktf.IResolvable) {
    this._headrooms.internalValue = value;
  }
  public resetHeadrooms() {
    this._headrooms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headroomsInput() {
    return this._headrooms.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new OceanAksNpVirtualNodeGroupTaintsList(this, "taints", true);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: OceanAksNpVirtualNodeGroupTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      enable_node_public_ip: cdktf.booleanToTerraform(this._enableNodePublicIp),
      fallback_to_ondemand: cdktf.booleanToTerraform(this._fallbackToOndemand),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_count: cdktf.numberToTerraform(this._maxCount),
      max_pods_per_node: cdktf.numberToTerraform(this._maxPodsPerNode),
      min_count: cdktf.numberToTerraform(this._minCount),
      name: cdktf.stringToTerraform(this._name),
      ocean_id: cdktf.stringToTerraform(this._oceanId),
      os_disk_size_gb: cdktf.numberToTerraform(this._osDiskSizeGb),
      os_disk_type: cdktf.stringToTerraform(this._osDiskType),
      os_sku: cdktf.stringToTerraform(this._osSku),
      os_type: cdktf.stringToTerraform(this._osType),
      pod_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._podSubnetIds),
      spot_percentage: cdktf.numberToTerraform(this._spotPercentage),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vnet_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vnetSubnetIds),
      filters: oceanAksNpVirtualNodeGroupFiltersToTerraform(this._filters.internalValue),
      headrooms: cdktf.listMapper(oceanAksNpVirtualNodeGroupHeadroomsToTerraform, true)(this._headrooms.internalValue),
      taints: cdktf.listMapper(oceanAksNpVirtualNodeGroupTaintsToTerraform, true)(this._taints.internalValue),
    };
  }
}
