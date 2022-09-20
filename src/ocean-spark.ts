// https://www.terraform.io/docs/providers/spotinst/r/ocean_spark
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanSparkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#id OceanSpark#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}
  */
  readonly oceanClusterId: string;
  /**
  * compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#compute OceanSpark#compute}
  */
  readonly compute?: OceanSparkCompute;
  /**
  * ingress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#ingress OceanSpark#ingress}
  */
  readonly ingress?: OceanSparkIngress;
  /**
  * log_collection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#log_collection OceanSpark#log_collection}
  */
  readonly logCollection?: OceanSparkLogCollection;
  /**
  * webhook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#webhook OceanSpark#webhook}
  */
  readonly webhook?: OceanSparkWebhook;
}
export interface OceanSparkCompute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#create_vngs OceanSpark#create_vngs}
  */
  readonly createVngs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#use_taints OceanSpark#use_taints}
  */
  readonly useTaints?: boolean | cdktf.IResolvable;
}

export function oceanSparkComputeToTerraform(struct?: OceanSparkComputeOutputReference | OceanSparkCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_vngs: cdktf.booleanToTerraform(struct!.createVngs),
    use_taints: cdktf.booleanToTerraform(struct!.useTaints),
  }
}

export class OceanSparkComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createVngs !== undefined) {
      hasAnyValues = true;
      internalValueResult.createVngs = this._createVngs;
    }
    if (this._useTaints !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTaints = this._useTaints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createVngs = undefined;
      this._useTaints = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createVngs = value.createVngs;
      this._useTaints = value.useTaints;
    }
  }

  // create_vngs - computed: true, optional: true, required: false
  private _createVngs?: boolean | cdktf.IResolvable; 
  public get createVngs() {
    return this.getBooleanAttribute('create_vngs');
  }
  public set createVngs(value: boolean | cdktf.IResolvable) {
    this._createVngs = value;
  }
  public resetCreateVngs() {
    this._createVngs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVngsInput() {
    return this._createVngs;
  }

  // use_taints - computed: true, optional: true, required: false
  private _useTaints?: boolean | cdktf.IResolvable; 
  public get useTaints() {
    return this.getBooleanAttribute('use_taints');
  }
  public set useTaints(value: boolean | cdktf.IResolvable) {
    this._useTaints = value;
  }
  public resetUseTaints() {
    this._useTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTaintsInput() {
    return this._useTaints;
  }
}
export interface OceanSparkIngress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#service_annotations OceanSpark#service_annotations}
  */
  readonly serviceAnnotations?: { [key: string]: string };
}

export function oceanSparkIngressToTerraform(struct?: OceanSparkIngressOutputReference | OceanSparkIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceAnnotations),
  }
}

export class OceanSparkIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAnnotations = this._serviceAnnotations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAnnotations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAnnotations = value.serviceAnnotations;
    }
  }

  // service_annotations - computed: true, optional: true, required: false
  private _serviceAnnotations?: { [key: string]: string }; 
  public get serviceAnnotations() {
    return this.getStringMapAttribute('service_annotations');
  }
  public set serviceAnnotations(value: { [key: string]: string }) {
    this._serviceAnnotations = value;
  }
  public resetServiceAnnotations() {
    this._serviceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAnnotationsInput() {
    return this._serviceAnnotations;
  }
}
export interface OceanSparkLogCollection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#collect_driver_logs OceanSpark#collect_driver_logs}
  */
  readonly collectDriverLogs?: boolean | cdktf.IResolvable;
}

export function oceanSparkLogCollectionToTerraform(struct?: OceanSparkLogCollectionOutputReference | OceanSparkLogCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collect_driver_logs: cdktf.booleanToTerraform(struct!.collectDriverLogs),
  }
}

export class OceanSparkLogCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkLogCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectDriverLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectDriverLogs = this._collectDriverLogs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkLogCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collectDriverLogs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collectDriverLogs = value.collectDriverLogs;
    }
  }

  // collect_driver_logs - computed: true, optional: true, required: false
  private _collectDriverLogs?: boolean | cdktf.IResolvable; 
  public get collectDriverLogs() {
    return this.getBooleanAttribute('collect_driver_logs');
  }
  public set collectDriverLogs(value: boolean | cdktf.IResolvable) {
    this._collectDriverLogs = value;
  }
  public resetCollectDriverLogs() {
    this._collectDriverLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectDriverLogsInput() {
    return this._collectDriverLogs;
  }
}
export interface OceanSparkWebhook {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#host_network_ports OceanSpark#host_network_ports}
  */
  readonly hostNetworkPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark#use_host_network OceanSpark#use_host_network}
  */
  readonly useHostNetwork?: boolean | cdktf.IResolvable;
}

export function oceanSparkWebhookToTerraform(struct?: OceanSparkWebhookOutputReference | OceanSparkWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_network_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hostNetworkPorts),
    use_host_network: cdktf.booleanToTerraform(struct!.useHostNetwork),
  }
}

export class OceanSparkWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostNetworkPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetworkPorts = this._hostNetworkPorts;
    }
    if (this._useHostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostNetwork = this._useHostNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostNetworkPorts = undefined;
      this._useHostNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostNetworkPorts = value.hostNetworkPorts;
      this._useHostNetwork = value.useHostNetwork;
    }
  }

  // host_network_ports - computed: true, optional: true, required: false
  private _hostNetworkPorts?: number[]; 
  public get hostNetworkPorts() {
    return this.getNumberListAttribute('host_network_ports');
  }
  public set hostNetworkPorts(value: number[]) {
    this._hostNetworkPorts = value;
  }
  public resetHostNetworkPorts() {
    this._hostNetworkPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkPortsInput() {
    return this._hostNetworkPorts;
  }

  // use_host_network - computed: true, optional: true, required: false
  private _useHostNetwork?: boolean | cdktf.IResolvable; 
  public get useHostNetwork() {
    return this.getBooleanAttribute('use_host_network');
  }
  public set useHostNetwork(value: boolean | cdktf.IResolvable) {
    this._useHostNetwork = value;
  }
  public resetUseHostNetwork() {
    this._useHostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostNetworkInput() {
    return this._useHostNetwork;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark spotinst_ocean_spark}
*/
export class OceanSpark extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_spark";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_spark spotinst_ocean_spark} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanSparkConfig
  */
  public constructor(scope: Construct, id: string, config: OceanSparkConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_spark',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.84.0',
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
    this._id = config.id;
    this._oceanClusterId = config.oceanClusterId;
    this._compute.internalValue = config.compute;
    this._ingress.internalValue = config.ingress;
    this._logCollection.internalValue = config.logCollection;
    this._webhook.internalValue = config.webhook;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ocean_cluster_id - computed: false, optional: false, required: true
  private _oceanClusterId?: string; 
  public get oceanClusterId() {
    return this.getStringAttribute('ocean_cluster_id');
  }
  public set oceanClusterId(value: string) {
    this._oceanClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oceanClusterIdInput() {
    return this._oceanClusterId;
  }

  // compute - computed: false, optional: true, required: false
  private _compute = new OceanSparkComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: OceanSparkCompute) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new OceanSparkIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: OceanSparkIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // log_collection - computed: false, optional: true, required: false
  private _logCollection = new OceanSparkLogCollectionOutputReference(this, "log_collection");
  public get logCollection() {
    return this._logCollection;
  }
  public putLogCollection(value: OceanSparkLogCollection) {
    this._logCollection.internalValue = value;
  }
  public resetLogCollection() {
    this._logCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectionInput() {
    return this._logCollection.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new OceanSparkWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: OceanSparkWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ocean_cluster_id: cdktf.stringToTerraform(this._oceanClusterId),
      compute: oceanSparkComputeToTerraform(this._compute.internalValue),
      ingress: oceanSparkIngressToTerraform(this._ingress.internalValue),
      log_collection: oceanSparkLogCollectionToTerraform(this._logCollection.internalValue),
      webhook: oceanSparkWebhookToTerraform(this._webhook.internalValue),
    };
  }
}
