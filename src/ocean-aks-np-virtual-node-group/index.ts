// https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAksNpVirtualNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#availability_zones OceanAksNpVirtualNodeGroup#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#enable_node_public_ip OceanAksNpVirtualNodeGroup#enable_node_public_ip}
  */
  readonly enableNodePublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#fallback_to_ondemand OceanAksNpVirtualNodeGroup#fallback_to_ondemand}
  */
  readonly fallbackToOndemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#id OceanAksNpVirtualNodeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#labels OceanAksNpVirtualNodeGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#max_count OceanAksNpVirtualNodeGroup#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#max_pods_per_node OceanAksNpVirtualNodeGroup#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#min_count OceanAksNpVirtualNodeGroup#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#name OceanAksNpVirtualNodeGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#ocean_id OceanAksNpVirtualNodeGroup#ocean_id}
  */
  readonly oceanId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_disk_size_gb OceanAksNpVirtualNodeGroup#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_disk_type OceanAksNpVirtualNodeGroup#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#os_type OceanAksNpVirtualNodeGroup#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#spot_percentage OceanAksNpVirtualNodeGroup#spot_percentage}
  */
  readonly spotPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#tags OceanAksNpVirtualNodeGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * headrooms block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#headrooms OceanAksNpVirtualNodeGroup#headrooms}
  */
  readonly headrooms?: OceanAksNpVirtualNodeGroupHeadrooms[] | cdktf.IResolvable;
  /**
  * taints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#taints OceanAksNpVirtualNodeGroup#taints}
  */
  readonly taints?: OceanAksNpVirtualNodeGroupTaints[] | cdktf.IResolvable;
}
export interface OceanAksNpVirtualNodeGroupHeadrooms {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#cpu_per_unit OceanAksNpVirtualNodeGroup#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#gpu_per_unit OceanAksNpVirtualNodeGroup#gpu_per_unit}
  */
  readonly gpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#memory_per_unit OceanAksNpVirtualNodeGroup#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#num_of_units OceanAksNpVirtualNodeGroup#num_of_units}
  */
  readonly numOfUnits: number;
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

  // num_of_units - computed: false, optional: false, required: true
  private _numOfUnits?: number; 
  public get numOfUnits() {
    return this.getNumberAttribute('num_of_units');
  }
  public set numOfUnits(value: number) {
    this._numOfUnits = value;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#effect OceanAksNpVirtualNodeGroup#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#key OceanAksNpVirtualNodeGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group#value OceanAksNpVirtualNodeGroup#value}
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
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group spotinst_ocean_aks_np_virtual_node_group}
*/
export class OceanAksNpVirtualNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aks_np_virtual_node_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np_virtual_node_group spotinst_ocean_aks_np_virtual_node_group} Resource
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
        providerVersion: '1.108.0',
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
    this._labels = config.labels;
    this._maxCount = config.maxCount;
    this._maxPodsPerNode = config.maxPodsPerNode;
    this._minCount = config.minCount;
    this._name = config.name;
    this._oceanId = config.oceanId;
    this._osDiskSizeGb = config.osDiskSizeGb;
    this._osDiskType = config.osDiskType;
    this._osType = config.osType;
    this._spotPercentage = config.spotPercentage;
    this._tags = config.tags;
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
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_count: cdktf.numberToTerraform(this._maxCount),
      max_pods_per_node: cdktf.numberToTerraform(this._maxPodsPerNode),
      min_count: cdktf.numberToTerraform(this._minCount),
      name: cdktf.stringToTerraform(this._name),
      ocean_id: cdktf.stringToTerraform(this._oceanId),
      os_disk_size_gb: cdktf.numberToTerraform(this._osDiskSizeGb),
      os_disk_type: cdktf.stringToTerraform(this._osDiskType),
      os_type: cdktf.stringToTerraform(this._osType),
      spot_percentage: cdktf.numberToTerraform(this._spotPercentage),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      headrooms: cdktf.listMapper(oceanAksNpVirtualNodeGroupHeadroomsToTerraform, true)(this._headrooms.internalValue),
      taints: cdktf.listMapper(oceanAksNpVirtualNodeGroupTaintsToTerraform, true)(this._taints.internalValue),
    };
  }
}