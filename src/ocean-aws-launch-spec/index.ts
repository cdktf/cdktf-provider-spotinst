// https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAwsLaunchSpecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#associate_public_ip_address OceanAwsLaunchSpec#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#iam_instance_profile OceanAwsLaunchSpec#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#id OceanAwsLaunchSpec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#instance_types OceanAwsLaunchSpec#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#name OceanAwsLaunchSpec#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#ocean_id OceanAwsLaunchSpec#ocean_id}
  */
  readonly oceanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#preferred_spot_types OceanAwsLaunchSpec#preferred_spot_types}
  */
  readonly preferredSpotTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#restrict_scale_down OceanAwsLaunchSpec#restrict_scale_down}
  */
  readonly restrictScaleDown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#root_volume_size OceanAwsLaunchSpec#root_volume_size}
  */
  readonly rootVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#security_groups OceanAwsLaunchSpec#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#subnet_ids OceanAwsLaunchSpec#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#user_data OceanAwsLaunchSpec#user_data}
  */
  readonly userData?: string;
  /**
  * autoscale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#autoscale_down OceanAwsLaunchSpec#autoscale_down}
  */
  readonly autoscaleDown?: OceanAwsLaunchSpecAutoscaleDown[] | cdktf.IResolvable;
  /**
  * autoscale_headrooms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#autoscale_headrooms OceanAwsLaunchSpec#autoscale_headrooms}
  */
  readonly autoscaleHeadrooms?: OceanAwsLaunchSpecAutoscaleHeadrooms[] | cdktf.IResolvable;
  /**
  * autoscale_headrooms_automatic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#autoscale_headrooms_automatic OceanAwsLaunchSpec#autoscale_headrooms_automatic}
  */
  readonly autoscaleHeadroomsAutomatic?: OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic[] | cdktf.IResolvable;
  /**
  * block_device_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#block_device_mappings OceanAwsLaunchSpec#block_device_mappings}
  */
  readonly blockDeviceMappings?: OceanAwsLaunchSpecBlockDeviceMappings[] | cdktf.IResolvable;
  /**
  * create_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#create_options OceanAwsLaunchSpec#create_options}
  */
  readonly createOptions?: OceanAwsLaunchSpecCreateOptions;
  /**
  * delete_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#delete_options OceanAwsLaunchSpec#delete_options}
  */
  readonly deleteOptions?: OceanAwsLaunchSpecDeleteOptions;
  /**
  * elastic_ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#elastic_ip_pool OceanAwsLaunchSpec#elastic_ip_pool}
  */
  readonly elasticIpPool?: OceanAwsLaunchSpecElasticIpPool[] | cdktf.IResolvable;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#images OceanAwsLaunchSpec#images}
  */
  readonly images?: OceanAwsLaunchSpecImages[] | cdktf.IResolvable;
  /**
  * instance_metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#instance_metadata_options OceanAwsLaunchSpec#instance_metadata_options}
  */
  readonly instanceMetadataOptions?: OceanAwsLaunchSpecInstanceMetadataOptions;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#labels OceanAwsLaunchSpec#labels}
  */
  readonly labels?: OceanAwsLaunchSpecLabels[] | cdktf.IResolvable;
  /**
  * resource_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#resource_limits OceanAwsLaunchSpec#resource_limits}
  */
  readonly resourceLimits?: OceanAwsLaunchSpecResourceLimits[] | cdktf.IResolvable;
  /**
  * scheduling_shutdown_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#scheduling_shutdown_hours OceanAwsLaunchSpec#scheduling_shutdown_hours}
  */
  readonly schedulingShutdownHours?: OceanAwsLaunchSpecSchedulingShutdownHours;
  /**
  * scheduling_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#scheduling_task OceanAwsLaunchSpec#scheduling_task}
  */
  readonly schedulingTask?: OceanAwsLaunchSpecSchedulingTask[] | cdktf.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#strategy OceanAwsLaunchSpec#strategy}
  */
  readonly strategy?: OceanAwsLaunchSpecStrategy[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#tags OceanAwsLaunchSpec#tags}
  */
  readonly tags?: OceanAwsLaunchSpecTags[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#taints OceanAwsLaunchSpec#taints}
  */
  readonly taints?: OceanAwsLaunchSpecTaints[] | cdktf.IResolvable;
  /**
  * update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#update_policy OceanAwsLaunchSpec#update_policy}
  */
  readonly updatePolicy?: OceanAwsLaunchSpecUpdatePolicy;
}
export interface OceanAwsLaunchSpecAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#max_scale_down_percentage OceanAwsLaunchSpec#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function oceanAwsLaunchSpecAutoscaleDownToTerraform(struct?: OceanAwsLaunchSpecAutoscaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}

export class OceanAwsLaunchSpecAutoscaleDownOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecAutoscaleDown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxScaleDownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleDownPercentage = this._maxScaleDownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecAutoscaleDown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxScaleDownPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxScaleDownPercentage = value.maxScaleDownPercentage;
    }
  }

  // max_scale_down_percentage - computed: false, optional: true, required: false
  private _maxScaleDownPercentage?: number; 
  public get maxScaleDownPercentage() {
    return this.getNumberAttribute('max_scale_down_percentage');
  }
  public set maxScaleDownPercentage(value: number) {
    this._maxScaleDownPercentage = value;
  }
  public resetMaxScaleDownPercentage() {
    this._maxScaleDownPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleDownPercentageInput() {
    return this._maxScaleDownPercentage;
  }
}

export class OceanAwsLaunchSpecAutoscaleDownList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecAutoscaleDown[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecAutoscaleDownOutputReference {
    return new OceanAwsLaunchSpecAutoscaleDownOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecAutoscaleHeadrooms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}
  */
  readonly gpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}
  */
  readonly numOfUnits: number;
}

export function oceanAwsLaunchSpecAutoscaleHeadroomsToTerraform(struct?: OceanAwsLaunchSpecAutoscaleHeadrooms | cdktf.IResolvable): any {
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

export class OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecAutoscaleHeadrooms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsLaunchSpecAutoscaleHeadrooms | cdktf.IResolvable | undefined) {
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

export class OceanAwsLaunchSpecAutoscaleHeadroomsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecAutoscaleHeadrooms[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference {
    return new OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#auto_headroom_percentage OceanAwsLaunchSpec#auto_headroom_percentage}
  */
  readonly autoHeadroomPercentage?: number;
}

export function oceanAwsLaunchSpecAutoscaleHeadroomsAutomaticToTerraform(struct?: OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_headroom_percentage: cdktf.numberToTerraform(struct!.autoHeadroomPercentage),
  }
}

export class OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHeadroomPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHeadroomPercentage = this._autoHeadroomPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoHeadroomPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoHeadroomPercentage = value.autoHeadroomPercentage;
    }
  }

  // auto_headroom_percentage - computed: false, optional: true, required: false
  private _autoHeadroomPercentage?: number; 
  public get autoHeadroomPercentage() {
    return this.getNumberAttribute('auto_headroom_percentage');
  }
  public set autoHeadroomPercentage(value: number) {
    this._autoHeadroomPercentage = value;
  }
  public resetAutoHeadroomPercentage() {
    this._autoHeadroomPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHeadroomPercentageInput() {
    return this._autoHeadroomPercentage;
  }
}

export class OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference {
    return new OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#base_size OceanAwsLaunchSpec#base_size}
  */
  readonly baseSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#resource OceanAwsLaunchSpec#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#size_per_resource_unit OceanAwsLaunchSpec#size_per_resource_unit}
  */
  readonly sizePerResourceUnit: number;
}

export function oceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeToTerraform(struct?: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference | OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_size: cdktf.numberToTerraform(struct!.baseSize),
    resource: cdktf.stringToTerraform(struct!.resource),
    size_per_resource_unit: cdktf.numberToTerraform(struct!.sizePerResourceUnit),
  }
}

export class OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseSize = this._baseSize;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._sizePerResourceUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizePerResourceUnit = this._sizePerResourceUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseSize = undefined;
      this._resource = undefined;
      this._sizePerResourceUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseSize = value.baseSize;
      this._resource = value.resource;
      this._sizePerResourceUnit = value.sizePerResourceUnit;
    }
  }

  // base_size - computed: false, optional: false, required: true
  private _baseSize?: number; 
  public get baseSize() {
    return this.getNumberAttribute('base_size');
  }
  public set baseSize(value: number) {
    this._baseSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSizeInput() {
    return this._baseSize;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // size_per_resource_unit - computed: false, optional: false, required: true
  private _sizePerResourceUnit?: number; 
  public get sizePerResourceUnit() {
    return this.getNumberAttribute('size_per_resource_unit');
  }
  public set sizePerResourceUnit(value: number) {
    this._sizePerResourceUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizePerResourceUnitInput() {
    return this._sizePerResourceUnit;
  }
}
export interface OceanAwsLaunchSpecBlockDeviceMappingsEbs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#delete_on_termination OceanAwsLaunchSpec#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#encrypted OceanAwsLaunchSpec#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#iops OceanAwsLaunchSpec#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#kms_key_id OceanAwsLaunchSpec#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#snapshot_id OceanAwsLaunchSpec#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#throughput OceanAwsLaunchSpec#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#volume_size OceanAwsLaunchSpec#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#volume_type OceanAwsLaunchSpec#volume_type}
  */
  readonly volumeType?: string;
  /**
  * dynamic_volume_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#dynamic_volume_size OceanAwsLaunchSpec#dynamic_volume_size}
  */
  readonly dynamicVolumeSize?: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize;
}

export function oceanAwsLaunchSpecBlockDeviceMappingsEbsToTerraform(struct?: OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference | OceanAwsLaunchSpecBlockDeviceMappingsEbs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    dynamic_volume_size: oceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeToTerraform(struct!.dynamicVolumeSize),
  }
}

export class OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecBlockDeviceMappingsEbs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._dynamicVolumeSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicVolumeSize = this._dynamicVolumeSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecBlockDeviceMappingsEbs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteOnTermination = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._snapshotId = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
      this._dynamicVolumeSize.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteOnTermination = value.deleteOnTermination;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._snapshotId = value.snapshotId;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
      this._dynamicVolumeSize.internalValue = value.dynamicVolumeSize;
    }
  }

  // delete_on_termination - computed: true, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // dynamic_volume_size - computed: false, optional: true, required: false
  private _dynamicVolumeSize = new OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(this, "dynamic_volume_size");
  public get dynamicVolumeSize() {
    return this._dynamicVolumeSize;
  }
  public putDynamicVolumeSize(value: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize) {
    this._dynamicVolumeSize.internalValue = value;
  }
  public resetDynamicVolumeSize() {
    this._dynamicVolumeSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVolumeSizeInput() {
    return this._dynamicVolumeSize.internalValue;
  }
}
export interface OceanAwsLaunchSpecBlockDeviceMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#device_name OceanAwsLaunchSpec#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#no_device OceanAwsLaunchSpec#no_device}
  */
  readonly noDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#virtual_name OceanAwsLaunchSpec#virtual_name}
  */
  readonly virtualName?: string;
  /**
  * ebs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#ebs OceanAwsLaunchSpec#ebs}
  */
  readonly ebs?: OceanAwsLaunchSpecBlockDeviceMappingsEbs;
}

export function oceanAwsLaunchSpecBlockDeviceMappingsToTerraform(struct?: OceanAwsLaunchSpecBlockDeviceMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    no_device: cdktf.stringToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    ebs: oceanAwsLaunchSpecBlockDeviceMappingsEbsToTerraform(struct!.ebs),
  }
}

export class OceanAwsLaunchSpecBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecBlockDeviceMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._noDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDevice = this._noDevice;
    }
    if (this._virtualName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualName = this._virtualName;
    }
    if (this._ebs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecBlockDeviceMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._noDevice = undefined;
      this._virtualName = undefined;
      this._ebs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._noDevice = value.noDevice;
      this._virtualName = value.virtualName;
      this._ebs.internalValue = value.ebs;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // no_device - computed: false, optional: true, required: false
  private _noDevice?: string; 
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }
  public set noDevice(value: string) {
    this._noDevice = value;
  }
  public resetNoDevice() {
    this._noDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDeviceInput() {
    return this._noDevice;
  }

  // virtual_name - computed: false, optional: true, required: false
  private _virtualName?: string; 
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
  public set virtualName(value: string) {
    this._virtualName = value;
  }
  public resetVirtualName() {
    this._virtualName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNameInput() {
    return this._virtualName;
  }

  // ebs - computed: false, optional: true, required: false
  private _ebs = new OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }
  public putEbs(value: OceanAwsLaunchSpecBlockDeviceMappingsEbs) {
    this._ebs.internalValue = value;
  }
  public resetEbs() {
    this._ebs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs.internalValue;
  }
}

export class OceanAwsLaunchSpecBlockDeviceMappingsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecBlockDeviceMappings[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecBlockDeviceMappingsOutputReference {
    return new OceanAwsLaunchSpecBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecCreateOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#initial_nodes OceanAwsLaunchSpec#initial_nodes}
  */
  readonly initialNodes?: number;
}

export function oceanAwsLaunchSpecCreateOptionsToTerraform(struct?: OceanAwsLaunchSpecCreateOptionsOutputReference | OceanAwsLaunchSpecCreateOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_nodes: cdktf.numberToTerraform(struct!.initialNodes),
  }
}

export class OceanAwsLaunchSpecCreateOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecCreateOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialNodes = this._initialNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecCreateOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initialNodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initialNodes = value.initialNodes;
    }
  }

  // initial_nodes - computed: false, optional: true, required: false
  private _initialNodes?: number; 
  public get initialNodes() {
    return this.getNumberAttribute('initial_nodes');
  }
  public set initialNodes(value: number) {
    this._initialNodes = value;
  }
  public resetInitialNodes() {
    this._initialNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodesInput() {
    return this._initialNodes;
  }
}
export interface OceanAwsLaunchSpecDeleteOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#delete_nodes OceanAwsLaunchSpec#delete_nodes}
  */
  readonly deleteNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#force_delete OceanAwsLaunchSpec#force_delete}
  */
  readonly forceDelete: boolean | cdktf.IResolvable;
}

export function oceanAwsLaunchSpecDeleteOptionsToTerraform(struct?: OceanAwsLaunchSpecDeleteOptionsOutputReference | OceanAwsLaunchSpecDeleteOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_nodes: cdktf.booleanToTerraform(struct!.deleteNodes),
    force_delete: cdktf.booleanToTerraform(struct!.forceDelete),
  }
}

export class OceanAwsLaunchSpecDeleteOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecDeleteOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteNodes = this._deleteNodes;
    }
    if (this._forceDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDelete = this._forceDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecDeleteOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteNodes = undefined;
      this._forceDelete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteNodes = value.deleteNodes;
      this._forceDelete = value.forceDelete;
    }
  }

  // delete_nodes - computed: false, optional: true, required: false
  private _deleteNodes?: boolean | cdktf.IResolvable; 
  public get deleteNodes() {
    return this.getBooleanAttribute('delete_nodes');
  }
  public set deleteNodes(value: boolean | cdktf.IResolvable) {
    this._deleteNodes = value;
  }
  public resetDeleteNodes() {
    this._deleteNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteNodesInput() {
    return this._deleteNodes;
  }

  // force_delete - computed: false, optional: false, required: true
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }
}
export interface OceanAwsLaunchSpecElasticIpPoolTagSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#tag_key OceanAwsLaunchSpec#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#tag_value OceanAwsLaunchSpec#tag_value}
  */
  readonly tagValue?: string;
}

export function oceanAwsLaunchSpecElasticIpPoolTagSelectorToTerraform(struct?: OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference | OceanAwsLaunchSpecElasticIpPoolTagSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}

export class OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecElasticIpPoolTagSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecElasticIpPoolTagSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}
export interface OceanAwsLaunchSpecElasticIpPool {
  /**
  * tag_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#tag_selector OceanAwsLaunchSpec#tag_selector}
  */
  readonly tagSelector?: OceanAwsLaunchSpecElasticIpPoolTagSelector;
}

export function oceanAwsLaunchSpecElasticIpPoolToTerraform(struct?: OceanAwsLaunchSpecElasticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_selector: oceanAwsLaunchSpecElasticIpPoolTagSelectorToTerraform(struct!.tagSelector),
  }
}

export class OceanAwsLaunchSpecElasticIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecElasticIpPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSelector = this._tagSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecElasticIpPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagSelector.internalValue = value.tagSelector;
    }
  }

  // tag_selector - computed: false, optional: true, required: false
  private _tagSelector = new OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference(this, "tag_selector");
  public get tagSelector() {
    return this._tagSelector;
  }
  public putTagSelector(value: OceanAwsLaunchSpecElasticIpPoolTagSelector) {
    this._tagSelector.internalValue = value;
  }
  public resetTagSelector() {
    this._tagSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSelectorInput() {
    return this._tagSelector.internalValue;
  }
}

export class OceanAwsLaunchSpecElasticIpPoolList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecElasticIpPool[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecElasticIpPoolOutputReference {
    return new OceanAwsLaunchSpecElasticIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}
  */
  readonly imageId?: string;
}

export function oceanAwsLaunchSpecImagesToTerraform(struct?: OceanAwsLaunchSpecImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_id: cdktf.stringToTerraform(struct!.imageId),
  }
}

export class OceanAwsLaunchSpecImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageId = value.imageId;
    }
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }
}

export class OceanAwsLaunchSpecImagesList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecImages[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecImagesOutputReference {
    return new OceanAwsLaunchSpecImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecInstanceMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#http_put_response_hop_limit OceanAwsLaunchSpec#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#http_tokens OceanAwsLaunchSpec#http_tokens}
  */
  readonly httpTokens: string;
}

export function oceanAwsLaunchSpecInstanceMetadataOptionsToTerraform(struct?: OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference | OceanAwsLaunchSpecInstanceMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}

export class OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecInstanceMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPutResponseHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
    }
    if (this._httpTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTokens = this._httpTokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecInstanceMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPutResponseHopLimit = undefined;
      this._httpTokens = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
      this._httpTokens = value.httpTokens;
    }
  }

  // http_put_response_hop_limit - computed: false, optional: true, required: false
  private _httpPutResponseHopLimit?: number; 
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }
  public set httpPutResponseHopLimit(value: number) {
    this._httpPutResponseHopLimit = value;
  }
  public resetHttpPutResponseHopLimit() {
    this._httpPutResponseHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPutResponseHopLimitInput() {
    return this._httpPutResponseHopLimit;
  }

  // http_tokens - computed: false, optional: false, required: true
  private _httpTokens?: string; 
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
  public set httpTokens(value: string) {
    this._httpTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTokensInput() {
    return this._httpTokens;
  }
}
export interface OceanAwsLaunchSpecLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}
  */
  readonly value: string;
}

export function oceanAwsLaunchSpecLabelsToTerraform(struct?: OceanAwsLaunchSpecLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class OceanAwsLaunchSpecLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: OceanAwsLaunchSpecLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
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

export class OceanAwsLaunchSpecLabelsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecLabels[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecLabelsOutputReference {
    return new OceanAwsLaunchSpecLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecResourceLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#max_instance_count OceanAwsLaunchSpec#max_instance_count}
  */
  readonly maxInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#min_instance_count OceanAwsLaunchSpec#min_instance_count}
  */
  readonly minInstanceCount?: number;
}

export function oceanAwsLaunchSpecResourceLimitsToTerraform(struct?: OceanAwsLaunchSpecResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
  }
}

export class OceanAwsLaunchSpecResourceLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecResourceLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceCount = this._maxInstanceCount;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecResourceLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxInstanceCount = undefined;
      this._minInstanceCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxInstanceCount = value.maxInstanceCount;
      this._minInstanceCount = value.minInstanceCount;
    }
  }

  // max_instance_count - computed: false, optional: true, required: false
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }
}

export class OceanAwsLaunchSpecResourceLimitsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecResourceLimits[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecResourceLimitsOutputReference {
    return new OceanAwsLaunchSpecResourceLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecSchedulingShutdownHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#time_windows OceanAwsLaunchSpec#time_windows}
  */
  readonly timeWindows: string[];
}

export function oceanAwsLaunchSpecSchedulingShutdownHoursToTerraform(struct?: OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference | OceanAwsLaunchSpecSchedulingShutdownHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    time_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeWindows),
  }
}

export class OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecSchedulingShutdownHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._timeWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindows = this._timeWindows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecSchedulingShutdownHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._timeWindows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._timeWindows = value.timeWindows;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // time_windows - computed: false, optional: false, required: true
  private _timeWindows?: string[]; 
  public get timeWindows() {
    return this.getListAttribute('time_windows');
  }
  public set timeWindows(value: string[]) {
    this._timeWindows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows;
  }
}
export interface OceanAwsLaunchSpecSchedulingTaskTaskHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}
  */
  readonly gpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}
  */
  readonly numOfUnits: number;
}

export function oceanAwsLaunchSpecSchedulingTaskTaskHeadroomToTerraform(struct?: OceanAwsLaunchSpecSchedulingTaskTaskHeadroom | cdktf.IResolvable): any {
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

export class OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecSchedulingTaskTaskHeadroom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsLaunchSpecSchedulingTaskTaskHeadroom | cdktf.IResolvable | undefined) {
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

export class OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecSchedulingTaskTaskHeadroom[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference {
    return new OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecSchedulingTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#cron_expression OceanAwsLaunchSpec#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#task_type OceanAwsLaunchSpec#task_type}
  */
  readonly taskType: string;
  /**
  * task_headroom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#task_headroom OceanAwsLaunchSpec#task_headroom}
  */
  readonly taskHeadroom?: OceanAwsLaunchSpecSchedulingTaskTaskHeadroom[] | cdktf.IResolvable;
}

export function oceanAwsLaunchSpecSchedulingTaskToTerraform(struct?: OceanAwsLaunchSpecSchedulingTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    task_headroom: cdktf.listMapper(oceanAwsLaunchSpecSchedulingTaskTaskHeadroomToTerraform, true)(struct!.taskHeadroom),
  }
}

export class OceanAwsLaunchSpecSchedulingTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecSchedulingTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._taskHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskHeadroom = this._taskHeadroom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecSchedulingTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._isEnabled = undefined;
      this._taskType = undefined;
      this._taskHeadroom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpression = value.cronExpression;
      this._isEnabled = value.isEnabled;
      this._taskType = value.taskType;
      this._taskHeadroom.internalValue = value.taskHeadroom;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // task_headroom - computed: false, optional: true, required: false
  private _taskHeadroom = new OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList(this, "task_headroom", true);
  public get taskHeadroom() {
    return this._taskHeadroom;
  }
  public putTaskHeadroom(value: OceanAwsLaunchSpecSchedulingTaskTaskHeadroom[] | cdktf.IResolvable) {
    this._taskHeadroom.internalValue = value;
  }
  public resetTaskHeadroom() {
    this._taskHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskHeadroomInput() {
    return this._taskHeadroom.internalValue;
  }
}

export class OceanAwsLaunchSpecSchedulingTaskList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecSchedulingTask[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecSchedulingTaskOutputReference {
    return new OceanAwsLaunchSpecSchedulingTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#spot_percentage OceanAwsLaunchSpec#spot_percentage}
  */
  readonly spotPercentage?: number;
}

export function oceanAwsLaunchSpecStrategyToTerraform(struct?: OceanAwsLaunchSpecStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spot_percentage: cdktf.numberToTerraform(struct!.spotPercentage),
  }
}

export class OceanAwsLaunchSpecStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spotPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotPercentage = this._spotPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spotPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spotPercentage = value.spotPercentage;
    }
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
}

export class OceanAwsLaunchSpecStrategyList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecStrategy[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecStrategyOutputReference {
    return new OceanAwsLaunchSpecStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}
  */
  readonly value: string;
}

export function oceanAwsLaunchSpecTagsToTerraform(struct?: OceanAwsLaunchSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class OceanAwsLaunchSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: OceanAwsLaunchSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
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

export class OceanAwsLaunchSpecTagsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecTags[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecTagsOutputReference {
    return new OceanAwsLaunchSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#effect OceanAwsLaunchSpec#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}
  */
  readonly value: string;
}

export function oceanAwsLaunchSpecTaintsToTerraform(struct?: OceanAwsLaunchSpecTaints | cdktf.IResolvable): any {
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

export class OceanAwsLaunchSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanAwsLaunchSpecTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OceanAwsLaunchSpecTaints | cdktf.IResolvable | undefined) {
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

export class OceanAwsLaunchSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : OceanAwsLaunchSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): OceanAwsLaunchSpecTaintsOutputReference {
    return new OceanAwsLaunchSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OceanAwsLaunchSpecUpdatePolicyRollConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#batch_size_percentage OceanAwsLaunchSpec#batch_size_percentage}
  */
  readonly batchSizePercentage: number;
}

export function oceanAwsLaunchSpecUpdatePolicyRollConfigToTerraform(struct?: OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference | OceanAwsLaunchSpecUpdatePolicyRollConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
  }
}

export class OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecUpdatePolicyRollConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecUpdatePolicyRollConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSizePercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSizePercentage = value.batchSizePercentage;
    }
  }

  // batch_size_percentage - computed: false, optional: false, required: true
  private _batchSizePercentage?: number; 
  public get batchSizePercentage() {
    return this.getNumberAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: number) {
    this._batchSizePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }
}
export interface OceanAwsLaunchSpecUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#should_roll OceanAwsLaunchSpec#should_roll}
  */
  readonly shouldRoll: boolean | cdktf.IResolvable;
  /**
  * roll_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec#roll_config OceanAwsLaunchSpec#roll_config}
  */
  readonly rollConfig?: OceanAwsLaunchSpecUpdatePolicyRollConfig;
}

export function oceanAwsLaunchSpecUpdatePolicyToTerraform(struct?: OceanAwsLaunchSpecUpdatePolicyOutputReference | OceanAwsLaunchSpecUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_roll: cdktf.booleanToTerraform(struct!.shouldRoll),
    roll_config: oceanAwsLaunchSpecUpdatePolicyRollConfigToTerraform(struct!.rollConfig),
  }
}

export class OceanAwsLaunchSpecUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLaunchSpecUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldRoll = this._shouldRoll;
    }
    if (this._rollConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollConfig = this._rollConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLaunchSpecUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldRoll = undefined;
      this._rollConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldRoll = value.shouldRoll;
      this._rollConfig.internalValue = value.rollConfig;
    }
  }

  // should_roll - computed: false, optional: false, required: true
  private _shouldRoll?: boolean | cdktf.IResolvable; 
  public get shouldRoll() {
    return this.getBooleanAttribute('should_roll');
  }
  public set shouldRoll(value: boolean | cdktf.IResolvable) {
    this._shouldRoll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldRollInput() {
    return this._shouldRoll;
  }

  // roll_config - computed: false, optional: true, required: false
  private _rollConfig = new OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference(this, "roll_config");
  public get rollConfig() {
    return this._rollConfig;
  }
  public putRollConfig(value: OceanAwsLaunchSpecUpdatePolicyRollConfig) {
    this._rollConfig.internalValue = value;
  }
  public resetRollConfig() {
    this._rollConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollConfigInput() {
    return this._rollConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec spotinst_ocean_aws_launch_spec}
*/
export class OceanAwsLaunchSpec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aws_launch_spec";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/ocean_aws_launch_spec spotinst_ocean_aws_launch_spec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanAwsLaunchSpecConfig
  */
  public constructor(scope: Construct, id: string, config: OceanAwsLaunchSpecConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_aws_launch_spec',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.143.0',
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
    this._associatePublicIpAddress = config.associatePublicIpAddress;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceTypes = config.instanceTypes;
    this._name = config.name;
    this._oceanId = config.oceanId;
    this._preferredSpotTypes = config.preferredSpotTypes;
    this._restrictScaleDown = config.restrictScaleDown;
    this._rootVolumeSize = config.rootVolumeSize;
    this._securityGroups = config.securityGroups;
    this._subnetIds = config.subnetIds;
    this._userData = config.userData;
    this._autoscaleDown.internalValue = config.autoscaleDown;
    this._autoscaleHeadrooms.internalValue = config.autoscaleHeadrooms;
    this._autoscaleHeadroomsAutomatic.internalValue = config.autoscaleHeadroomsAutomatic;
    this._blockDeviceMappings.internalValue = config.blockDeviceMappings;
    this._createOptions.internalValue = config.createOptions;
    this._deleteOptions.internalValue = config.deleteOptions;
    this._elasticIpPool.internalValue = config.elasticIpPool;
    this._images.internalValue = config.images;
    this._instanceMetadataOptions.internalValue = config.instanceMetadataOptions;
    this._labels.internalValue = config.labels;
    this._resourceLimits.internalValue = config.resourceLimits;
    this._schedulingShutdownHours.internalValue = config.schedulingShutdownHours;
    this._schedulingTask.internalValue = config.schedulingTask;
    this._strategy.internalValue = config.strategy;
    this._tags.internalValue = config.tags;
    this._taints.internalValue = config.taints;
    this._updatePolicy.internalValue = config.updatePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: boolean | cdktf.IResolvable; 
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean | cdktf.IResolvable) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress;
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: string; 
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_types - computed: false, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // preferred_spot_types - computed: false, optional: true, required: false
  private _preferredSpotTypes?: string[]; 
  public get preferredSpotTypes() {
    return this.getListAttribute('preferred_spot_types');
  }
  public set preferredSpotTypes(value: string[]) {
    this._preferredSpotTypes = value;
  }
  public resetPreferredSpotTypes() {
    this._preferredSpotTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSpotTypesInput() {
    return this._preferredSpotTypes;
  }

  // restrict_scale_down - computed: false, optional: true, required: false
  private _restrictScaleDown?: boolean | cdktf.IResolvable; 
  public get restrictScaleDown() {
    return this.getBooleanAttribute('restrict_scale_down');
  }
  public set restrictScaleDown(value: boolean | cdktf.IResolvable) {
    this._restrictScaleDown = value;
  }
  public resetRestrictScaleDown() {
    this._restrictScaleDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictScaleDownInput() {
    return this._restrictScaleDown;
  }

  // root_volume_size - computed: false, optional: true, required: false
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  public resetRootVolumeSize() {
    this._rootVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new OceanAwsLaunchSpecAutoscaleDownList(this, "autoscale_down", false);
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: OceanAwsLaunchSpecAutoscaleDown[] | cdktf.IResolvable) {
    this._autoscaleDown.internalValue = value;
  }
  public resetAutoscaleDown() {
    this._autoscaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleDownInput() {
    return this._autoscaleDown.internalValue;
  }

  // autoscale_headrooms - computed: false, optional: true, required: false
  private _autoscaleHeadrooms = new OceanAwsLaunchSpecAutoscaleHeadroomsList(this, "autoscale_headrooms", true);
  public get autoscaleHeadrooms() {
    return this._autoscaleHeadrooms;
  }
  public putAutoscaleHeadrooms(value: OceanAwsLaunchSpecAutoscaleHeadrooms[] | cdktf.IResolvable) {
    this._autoscaleHeadrooms.internalValue = value;
  }
  public resetAutoscaleHeadrooms() {
    this._autoscaleHeadrooms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomsInput() {
    return this._autoscaleHeadrooms.internalValue;
  }

  // autoscale_headrooms_automatic - computed: false, optional: true, required: false
  private _autoscaleHeadroomsAutomatic = new OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList(this, "autoscale_headrooms_automatic", false);
  public get autoscaleHeadroomsAutomatic() {
    return this._autoscaleHeadroomsAutomatic;
  }
  public putAutoscaleHeadroomsAutomatic(value: OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic[] | cdktf.IResolvable) {
    this._autoscaleHeadroomsAutomatic.internalValue = value;
  }
  public resetAutoscaleHeadroomsAutomatic() {
    this._autoscaleHeadroomsAutomatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomsAutomaticInput() {
    return this._autoscaleHeadroomsAutomatic.internalValue;
  }

  // block_device_mappings - computed: false, optional: true, required: false
  private _blockDeviceMappings = new OceanAwsLaunchSpecBlockDeviceMappingsList(this, "block_device_mappings", false);
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }
  public putBlockDeviceMappings(value: OceanAwsLaunchSpecBlockDeviceMappings[] | cdktf.IResolvable) {
    this._blockDeviceMappings.internalValue = value;
  }
  public resetBlockDeviceMappings() {
    this._blockDeviceMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingsInput() {
    return this._blockDeviceMappings.internalValue;
  }

  // create_options - computed: false, optional: true, required: false
  private _createOptions = new OceanAwsLaunchSpecCreateOptionsOutputReference(this, "create_options");
  public get createOptions() {
    return this._createOptions;
  }
  public putCreateOptions(value: OceanAwsLaunchSpecCreateOptions) {
    this._createOptions.internalValue = value;
  }
  public resetCreateOptions() {
    this._createOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOptionsInput() {
    return this._createOptions.internalValue;
  }

  // delete_options - computed: false, optional: true, required: false
  private _deleteOptions = new OceanAwsLaunchSpecDeleteOptionsOutputReference(this, "delete_options");
  public get deleteOptions() {
    return this._deleteOptions;
  }
  public putDeleteOptions(value: OceanAwsLaunchSpecDeleteOptions) {
    this._deleteOptions.internalValue = value;
  }
  public resetDeleteOptions() {
    this._deleteOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOptionsInput() {
    return this._deleteOptions.internalValue;
  }

  // elastic_ip_pool - computed: false, optional: true, required: false
  private _elasticIpPool = new OceanAwsLaunchSpecElasticIpPoolList(this, "elastic_ip_pool", true);
  public get elasticIpPool() {
    return this._elasticIpPool;
  }
  public putElasticIpPool(value: OceanAwsLaunchSpecElasticIpPool[] | cdktf.IResolvable) {
    this._elasticIpPool.internalValue = value;
  }
  public resetElasticIpPool() {
    this._elasticIpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpPoolInput() {
    return this._elasticIpPool.internalValue;
  }

  // images - computed: false, optional: true, required: false
  private _images = new OceanAwsLaunchSpecImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: OceanAwsLaunchSpecImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // instance_metadata_options - computed: false, optional: true, required: false
  private _instanceMetadataOptions = new OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference(this, "instance_metadata_options");
  public get instanceMetadataOptions() {
    return this._instanceMetadataOptions;
  }
  public putInstanceMetadataOptions(value: OceanAwsLaunchSpecInstanceMetadataOptions) {
    this._instanceMetadataOptions.internalValue = value;
  }
  public resetInstanceMetadataOptions() {
    this._instanceMetadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMetadataOptionsInput() {
    return this._instanceMetadataOptions.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new OceanAwsLaunchSpecLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: OceanAwsLaunchSpecLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new OceanAwsLaunchSpecResourceLimitsList(this, "resource_limits", false);
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: OceanAwsLaunchSpecResourceLimits[] | cdktf.IResolvable) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }

  // scheduling_shutdown_hours - computed: false, optional: true, required: false
  private _schedulingShutdownHours = new OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference(this, "scheduling_shutdown_hours");
  public get schedulingShutdownHours() {
    return this._schedulingShutdownHours;
  }
  public putSchedulingShutdownHours(value: OceanAwsLaunchSpecSchedulingShutdownHours) {
    this._schedulingShutdownHours.internalValue = value;
  }
  public resetSchedulingShutdownHours() {
    this._schedulingShutdownHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingShutdownHoursInput() {
    return this._schedulingShutdownHours.internalValue;
  }

  // scheduling_task - computed: false, optional: true, required: false
  private _schedulingTask = new OceanAwsLaunchSpecSchedulingTaskList(this, "scheduling_task", true);
  public get schedulingTask() {
    return this._schedulingTask;
  }
  public putSchedulingTask(value: OceanAwsLaunchSpecSchedulingTask[] | cdktf.IResolvable) {
    this._schedulingTask.internalValue = value;
  }
  public resetSchedulingTask() {
    this._schedulingTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTaskInput() {
    return this._schedulingTask.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new OceanAwsLaunchSpecStrategyList(this, "strategy", true);
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: OceanAwsLaunchSpecStrategy[] | cdktf.IResolvable) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new OceanAwsLaunchSpecTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: OceanAwsLaunchSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new OceanAwsLaunchSpecTaintsList(this, "taints", true);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: OceanAwsLaunchSpecTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new OceanAwsLaunchSpecUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: OceanAwsLaunchSpecUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypes),
      name: cdktf.stringToTerraform(this._name),
      ocean_id: cdktf.stringToTerraform(this._oceanId),
      preferred_spot_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredSpotTypes),
      restrict_scale_down: cdktf.booleanToTerraform(this._restrictScaleDown),
      root_volume_size: cdktf.numberToTerraform(this._rootVolumeSize),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      user_data: cdktf.stringToTerraform(this._userData),
      autoscale_down: cdktf.listMapper(oceanAwsLaunchSpecAutoscaleDownToTerraform, true)(this._autoscaleDown.internalValue),
      autoscale_headrooms: cdktf.listMapper(oceanAwsLaunchSpecAutoscaleHeadroomsToTerraform, true)(this._autoscaleHeadrooms.internalValue),
      autoscale_headrooms_automatic: cdktf.listMapper(oceanAwsLaunchSpecAutoscaleHeadroomsAutomaticToTerraform, true)(this._autoscaleHeadroomsAutomatic.internalValue),
      block_device_mappings: cdktf.listMapper(oceanAwsLaunchSpecBlockDeviceMappingsToTerraform, true)(this._blockDeviceMappings.internalValue),
      create_options: oceanAwsLaunchSpecCreateOptionsToTerraform(this._createOptions.internalValue),
      delete_options: oceanAwsLaunchSpecDeleteOptionsToTerraform(this._deleteOptions.internalValue),
      elastic_ip_pool: cdktf.listMapper(oceanAwsLaunchSpecElasticIpPoolToTerraform, true)(this._elasticIpPool.internalValue),
      images: cdktf.listMapper(oceanAwsLaunchSpecImagesToTerraform, true)(this._images.internalValue),
      instance_metadata_options: oceanAwsLaunchSpecInstanceMetadataOptionsToTerraform(this._instanceMetadataOptions.internalValue),
      labels: cdktf.listMapper(oceanAwsLaunchSpecLabelsToTerraform, true)(this._labels.internalValue),
      resource_limits: cdktf.listMapper(oceanAwsLaunchSpecResourceLimitsToTerraform, true)(this._resourceLimits.internalValue),
      scheduling_shutdown_hours: oceanAwsLaunchSpecSchedulingShutdownHoursToTerraform(this._schedulingShutdownHours.internalValue),
      scheduling_task: cdktf.listMapper(oceanAwsLaunchSpecSchedulingTaskToTerraform, true)(this._schedulingTask.internalValue),
      strategy: cdktf.listMapper(oceanAwsLaunchSpecStrategyToTerraform, true)(this._strategy.internalValue),
      tags: cdktf.listMapper(oceanAwsLaunchSpecTagsToTerraform, true)(this._tags.internalValue),
      taints: cdktf.listMapper(oceanAwsLaunchSpecTaintsToTerraform, true)(this._taints.internalValue),
      update_policy: oceanAwsLaunchSpecUpdatePolicyToTerraform(this._updatePolicy.internalValue),
    };
  }
}
