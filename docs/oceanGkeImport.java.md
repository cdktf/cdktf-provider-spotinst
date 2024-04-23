# `oceanGkeImport` Submodule <a name="`oceanGkeImport` Submodule" id="@cdktf/provider-spotinst.oceanGkeImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanGkeImport <a name="OceanGkeImport" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import spotinst_ocean_gke_import}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImport;

OceanGkeImport.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .location(java.lang.String)
//  .autoscaler(OceanGkeImportAutoscaler)
//  .backendServices(IResolvable)
//  .backendServices(java.util.List<OceanGkeImportBackendServices>)
//  .blacklist(java.util.List<java.lang.String>)
//  .controllerClusterId(java.lang.String)
//  .desiredCapacity(java.lang.Number)
//  .id(java.lang.String)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .rootVolumeType(java.lang.String)
//  .scheduledTask(IResolvable)
//  .scheduledTask(java.util.List<OceanGkeImportScheduledTask>)
//  .shieldedInstanceConfig(OceanGkeImportShieldedInstanceConfig)
//  .strategy(IResolvable)
//  .strategy(java.util.List<OceanGkeImportStrategy>)
//  .updatePolicy(OceanGkeImportUpdatePolicy)
//  .useAsTemplateOnly(java.lang.Boolean)
//  .useAsTemplateOnly(IResolvable)
//  .whitelist(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#cluster_name OceanGkeImport#cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#location OceanGkeImport#location}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.backendServices">backendServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>></code> | backend_services block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.blacklist">blacklist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#blacklist OceanGkeImport#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.controllerClusterId">controllerClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#controller_cluster_id OceanGkeImport#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#desired_capacity OceanGkeImport#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#id OceanGkeImport#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#max_size OceanGkeImport#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#min_size OceanGkeImport#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.rootVolumeType">rootVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#root_volume_type OceanGkeImport#root_volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.scheduledTask">scheduledTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>></code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.strategy">strategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.useAsTemplateOnly">useAsTemplateOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#use_as_template_only OceanGkeImport#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.whitelist">whitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#whitelist OceanGkeImport#whitelist}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#cluster_name OceanGkeImport#cluster_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#location OceanGkeImport#location}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.autoscaler"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#autoscaler OceanGkeImport#autoscaler}

---

##### `backendServices`<sup>Optional</sup> <a name="backendServices" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.backendServices"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>>

backend_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#backend_services OceanGkeImport#backend_services}

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.blacklist"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#blacklist OceanGkeImport#blacklist}.

---

##### `controllerClusterId`<sup>Optional</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.controllerClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#controller_cluster_id OceanGkeImport#controller_cluster_id}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.desiredCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#desired_capacity OceanGkeImport#desired_capacity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#id OceanGkeImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.maxSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#max_size OceanGkeImport#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.minSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#min_size OceanGkeImport#min_size}.

---

##### `rootVolumeType`<sup>Optional</sup> <a name="rootVolumeType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.rootVolumeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#root_volume_type OceanGkeImport#root_volume_type}.

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.scheduledTask"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>>

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#scheduled_task OceanGkeImport#scheduled_task}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#shielded_instance_config OceanGkeImport#shielded_instance_config}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.strategy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#strategy OceanGkeImport#strategy}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#update_policy OceanGkeImport#update_policy}

---

##### `useAsTemplateOnly`<sup>Optional</sup> <a name="useAsTemplateOnly" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.useAsTemplateOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#use_as_template_only OceanGkeImport#use_as_template_only}.

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.Initializer.parameter.whitelist"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#whitelist OceanGkeImport#whitelist}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putAutoscaler">putAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putBackendServices">putBackendServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putScheduledTask">putScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetAutoscaler">resetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetBackendServices">resetBackendServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetBlacklist">resetBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetControllerClusterId">resetControllerClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetDesiredCapacity">resetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetRootVolumeType">resetRootVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetScheduledTask">resetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetUseAsTemplateOnly">resetUseAsTemplateOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetWhitelist">resetWhitelist</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaler` <a name="putAutoscaler" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putAutoscaler"></a>

```java
public void putAutoscaler(OceanGkeImportAutoscaler value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a>

---

##### `putBackendServices` <a name="putBackendServices" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putBackendServices"></a>

```java
public void putBackendServices(IResolvable OR java.util.List<OceanGkeImportBackendServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putBackendServices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>>

---

##### `putScheduledTask` <a name="putScheduledTask" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putScheduledTask"></a>

```java
public void putScheduledTask(IResolvable OR java.util.List<OceanGkeImportScheduledTask> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putScheduledTask.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putShieldedInstanceConfig"></a>

```java
public void putShieldedInstanceConfig(OceanGkeImportShieldedInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a>

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putStrategy"></a>

```java
public void putStrategy(IResolvable OR java.util.List<OceanGkeImportStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putStrategy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>>

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putUpdatePolicy"></a>

```java
public void putUpdatePolicy(OceanGkeImportUpdatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a>

---

##### `resetAutoscaler` <a name="resetAutoscaler" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetAutoscaler"></a>

```java
public void resetAutoscaler()
```

##### `resetBackendServices` <a name="resetBackendServices" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetBackendServices"></a>

```java
public void resetBackendServices()
```

##### `resetBlacklist` <a name="resetBlacklist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetBlacklist"></a>

```java
public void resetBlacklist()
```

##### `resetControllerClusterId` <a name="resetControllerClusterId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetControllerClusterId"></a>

```java
public void resetControllerClusterId()
```

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetDesiredCapacity"></a>

```java
public void resetDesiredCapacity()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetId"></a>

```java
public void resetId()
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetMaxSize"></a>

```java
public void resetMaxSize()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetMinSize"></a>

```java
public void resetMinSize()
```

##### `resetRootVolumeType` <a name="resetRootVolumeType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetRootVolumeType"></a>

```java
public void resetRootVolumeType()
```

##### `resetScheduledTask` <a name="resetScheduledTask" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetScheduledTask"></a>

```java
public void resetScheduledTask()
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetShieldedInstanceConfig"></a>

```java
public void resetShieldedInstanceConfig()
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetStrategy"></a>

```java
public void resetStrategy()
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetUpdatePolicy"></a>

```java
public void resetUpdatePolicy()
```

##### `resetUseAsTemplateOnly` <a name="resetUseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetUseAsTemplateOnly"></a>

```java
public void resetUseAsTemplateOnly()
```

##### `resetWhitelist` <a name="resetWhitelist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.resetWhitelist"></a>

```java
public void resetWhitelist()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanGkeImport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImport;

OceanGkeImport.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImport;

OceanGkeImport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImport;

OceanGkeImport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImport;

OceanGkeImport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OceanGkeImport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OceanGkeImport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OceanGkeImport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OceanGkeImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OceanGkeImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference">OceanGkeImportAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.backendServices">backendServices</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList">OceanGkeImportBackendServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterControllerId">clusterControllerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.scheduledTask">scheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList">OceanGkeImportScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference">OceanGkeImportShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList">OceanGkeImportStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference">OceanGkeImportUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.autoscalerInput">autoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.backendServicesInput">backendServicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.blacklistInput">blacklistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.controllerClusterIdInput">controllerClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.rootVolumeTypeInput">rootVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.scheduledTaskInput">scheduledTaskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.strategyInput">strategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.useAsTemplateOnlyInput">useAsTemplateOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.whitelistInput">whitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.blacklist">blacklist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.controllerClusterId">controllerClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.rootVolumeType">rootVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.useAsTemplateOnly">useAsTemplateOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.whitelist">whitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaler`<sup>Required</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.autoscaler"></a>

```java
public OceanGkeImportAutoscalerOutputReference getAutoscaler();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference">OceanGkeImportAutoscalerOutputReference</a>

---

##### `backendServices`<sup>Required</sup> <a name="backendServices" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.backendServices"></a>

```java
public OceanGkeImportBackendServicesList getBackendServices();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList">OceanGkeImportBackendServicesList</a>

---

##### `clusterControllerId`<sup>Required</sup> <a name="clusterControllerId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterControllerId"></a>

```java
public java.lang.String getClusterControllerId();
```

- *Type:* java.lang.String

---

##### `scheduledTask`<sup>Required</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.scheduledTask"></a>

```java
public OceanGkeImportScheduledTaskList getScheduledTask();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList">OceanGkeImportScheduledTaskList</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.shieldedInstanceConfig"></a>

```java
public OceanGkeImportShieldedInstanceConfigOutputReference getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference">OceanGkeImportShieldedInstanceConfigOutputReference</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.strategy"></a>

```java
public OceanGkeImportStrategyList getStrategy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList">OceanGkeImportStrategyList</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.updatePolicy"></a>

```java
public OceanGkeImportUpdatePolicyOutputReference getUpdatePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference">OceanGkeImportUpdatePolicyOutputReference</a>

---

##### `autoscalerInput`<sup>Optional</sup> <a name="autoscalerInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.autoscalerInput"></a>

```java
public OceanGkeImportAutoscaler getAutoscalerInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a>

---

##### `backendServicesInput`<sup>Optional</sup> <a name="backendServicesInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.backendServicesInput"></a>

```java
public java.lang.Object getBackendServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>>

---

##### `blacklistInput`<sup>Optional</sup> <a name="blacklistInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.blacklistInput"></a>

```java
public java.util.List<java.lang.String> getBlacklistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `controllerClusterIdInput`<sup>Optional</sup> <a name="controllerClusterIdInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.controllerClusterIdInput"></a>

```java
public java.lang.String getControllerClusterIdInput();
```

- *Type:* java.lang.String

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.desiredCapacityInput"></a>

```java
public java.lang.Number getDesiredCapacityInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `rootVolumeTypeInput`<sup>Optional</sup> <a name="rootVolumeTypeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.rootVolumeTypeInput"></a>

```java
public java.lang.String getRootVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `scheduledTaskInput`<sup>Optional</sup> <a name="scheduledTaskInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.scheduledTaskInput"></a>

```java
public java.lang.Object getScheduledTaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.shieldedInstanceConfigInput"></a>

```java
public OceanGkeImportShieldedInstanceConfig getShieldedInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a>

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.strategyInput"></a>

```java
public java.lang.Object getStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>>

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.updatePolicyInput"></a>

```java
public OceanGkeImportUpdatePolicy getUpdatePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a>

---

##### `useAsTemplateOnlyInput`<sup>Optional</sup> <a name="useAsTemplateOnlyInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.useAsTemplateOnlyInput"></a>

```java
public java.lang.Object getUseAsTemplateOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `whitelistInput`<sup>Optional</sup> <a name="whitelistInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.whitelistInput"></a>

```java
public java.util.List<java.lang.String> getWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `blacklist`<sup>Required</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.blacklist"></a>

```java
public java.util.List<java.lang.String> getBlacklist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `controllerClusterId`<sup>Required</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.controllerClusterId"></a>

```java
public java.lang.String getControllerClusterId();
```

- *Type:* java.lang.String

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `rootVolumeType`<sup>Required</sup> <a name="rootVolumeType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.rootVolumeType"></a>

```java
public java.lang.String getRootVolumeType();
```

- *Type:* java.lang.String

---

##### `useAsTemplateOnly`<sup>Required</sup> <a name="useAsTemplateOnly" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.useAsTemplateOnly"></a>

```java
public java.lang.Object getUseAsTemplateOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.whitelist"></a>

```java
public java.util.List<java.lang.String> getWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceanGkeImportAutoscaler <a name="OceanGkeImportAutoscaler" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportAutoscaler;

OceanGkeImportAutoscaler.builder()
//  .autoHeadroomPercentage(java.lang.Number)
//  .cooldown(java.lang.Number)
//  .down(OceanGkeImportAutoscalerDown)
//  .enableAutomaticAndManualHeadroom(java.lang.Boolean)
//  .enableAutomaticAndManualHeadroom(IResolvable)
//  .headroom(OceanGkeImportAutoscalerHeadroom)
//  .isAutoConfig(java.lang.Boolean)
//  .isAutoConfig(IResolvable)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .resourceLimits(OceanGkeImportAutoscalerResourceLimits)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#auto_headroom_percentage OceanGkeImport#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#cooldown OceanGkeImport#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.down">down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a></code> | down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.enableAutomaticAndManualHeadroom">enableAutomaticAndManualHeadroom</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#enable_automatic_and_manual_headroom OceanGkeImport#enable_automatic_and_manual_headroom}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.headroom">headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a></code> | headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.isAutoConfig">isAutoConfig</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#is_auto_config OceanGkeImport#is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `autoHeadroomPercentage`<sup>Optional</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.autoHeadroomPercentage"></a>

```java
public java.lang.Number getAutoHeadroomPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#auto_headroom_percentage OceanGkeImport#auto_headroom_percentage}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#cooldown OceanGkeImport#cooldown}.

---

##### `down`<sup>Optional</sup> <a name="down" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.down"></a>

```java
public OceanGkeImportAutoscalerDown getDown();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a>

down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#down OceanGkeImport#down}

---

##### `enableAutomaticAndManualHeadroom`<sup>Optional</sup> <a name="enableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.enableAutomaticAndManualHeadroom"></a>

```java
public java.lang.Object getEnableAutomaticAndManualHeadroom();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#enable_automatic_and_manual_headroom OceanGkeImport#enable_automatic_and_manual_headroom}.

---

##### `headroom`<sup>Optional</sup> <a name="headroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.headroom"></a>

```java
public OceanGkeImportAutoscalerHeadroom getHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a>

headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#headroom OceanGkeImport#headroom}

---

##### `isAutoConfig`<sup>Optional</sup> <a name="isAutoConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.isAutoConfig"></a>

```java
public java.lang.Object getIsAutoConfig();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#is_auto_config OceanGkeImport#is_auto_config}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}.

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler.property.resourceLimits"></a>

```java
public OceanGkeImportAutoscalerResourceLimits getResourceLimits();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#resource_limits OceanGkeImport#resource_limits}

---

### OceanGkeImportAutoscalerDown <a name="OceanGkeImportAutoscalerDown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportAutoscalerDown;

OceanGkeImportAutoscalerDown.builder()
//  .evaluationPeriods(java.lang.Number)
//  .maxScaleDownPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#evaluation_periods OceanGkeImport#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#max_scale_down_percentage OceanGkeImport#max_scale_down_percentage}. |

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#evaluation_periods OceanGkeImport#evaluation_periods}.

---

##### `maxScaleDownPercentage`<sup>Optional</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown.property.maxScaleDownPercentage"></a>

```java
public java.lang.Number getMaxScaleDownPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#max_scale_down_percentage OceanGkeImport#max_scale_down_percentage}.

---

### OceanGkeImportAutoscalerHeadroom <a name="OceanGkeImportAutoscalerHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportAutoscalerHeadroom;

OceanGkeImportAutoscalerHeadroom.builder()
//  .cpuPerUnit(java.lang.Number)
//  .gpuPerUnit(java.lang.Number)
//  .memoryPerUnit(java.lang.Number)
//  .numOfUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#cpu_per_unit OceanGkeImport#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.gpuPerUnit">gpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#gpu_per_unit OceanGkeImport#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#memory_per_unit OceanGkeImport#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#num_of_units OceanGkeImport#num_of_units}. |

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#cpu_per_unit OceanGkeImport#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.gpuPerUnit"></a>

```java
public java.lang.Number getGpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#gpu_per_unit OceanGkeImport#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#memory_per_unit OceanGkeImport#memory_per_unit}.

---

##### `numOfUnits`<sup>Optional</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#num_of_units OceanGkeImport#num_of_units}.

---

### OceanGkeImportAutoscalerResourceLimits <a name="OceanGkeImportAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportAutoscalerResourceLimits;

OceanGkeImportAutoscalerResourceLimits.builder()
//  .maxMemoryGib(java.lang.Number)
//  .maxVcpu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#max_memory_gib OceanGkeImport#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#max_vcpu OceanGkeImport#max_vcpu}. |

---

##### `maxMemoryGib`<sup>Optional</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#max_memory_gib OceanGkeImport#max_memory_gib}.

---

##### `maxVcpu`<sup>Optional</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#max_vcpu OceanGkeImport#max_vcpu}.

---

### OceanGkeImportBackendServices <a name="OceanGkeImportBackendServices" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportBackendServices;

OceanGkeImportBackendServices.builder()
    .serviceName(java.lang.String)
//  .locationType(java.lang.String)
//  .namedPorts(IResolvable)
//  .namedPorts(java.util.List<OceanGkeImportBackendServicesNamedPorts>)
//  .scheme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#service_name OceanGkeImport#service_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.locationType">locationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#location_type OceanGkeImport#location_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.namedPorts">namedPorts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>></code> | named_ports block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#scheme OceanGkeImport#scheme}. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#service_name OceanGkeImport#service_name}.

---

##### `locationType`<sup>Optional</sup> <a name="locationType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#location_type OceanGkeImport#location_type}.

---

##### `namedPorts`<sup>Optional</sup> <a name="namedPorts" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.namedPorts"></a>

```java
public java.lang.Object getNamedPorts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>>

named_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#named_ports OceanGkeImport#named_ports}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#scheme OceanGkeImport#scheme}.

---

### OceanGkeImportBackendServicesNamedPorts <a name="OceanGkeImportBackendServicesNamedPorts" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportBackendServicesNamedPorts;

OceanGkeImportBackendServicesNamedPorts.builder()
    .name(java.lang.String)
    .ports(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#name OceanGkeImport#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#ports OceanGkeImport#ports}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#name OceanGkeImport#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#ports OceanGkeImport#ports}.

---

### OceanGkeImportConfig <a name="OceanGkeImportConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportConfig;

OceanGkeImportConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .location(java.lang.String)
//  .autoscaler(OceanGkeImportAutoscaler)
//  .backendServices(IResolvable)
//  .backendServices(java.util.List<OceanGkeImportBackendServices>)
//  .blacklist(java.util.List<java.lang.String>)
//  .controllerClusterId(java.lang.String)
//  .desiredCapacity(java.lang.Number)
//  .id(java.lang.String)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .rootVolumeType(java.lang.String)
//  .scheduledTask(IResolvable)
//  .scheduledTask(java.util.List<OceanGkeImportScheduledTask>)
//  .shieldedInstanceConfig(OceanGkeImportShieldedInstanceConfig)
//  .strategy(IResolvable)
//  .strategy(java.util.List<OceanGkeImportStrategy>)
//  .updatePolicy(OceanGkeImportUpdatePolicy)
//  .useAsTemplateOnly(java.lang.Boolean)
//  .useAsTemplateOnly(IResolvable)
//  .whitelist(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#cluster_name OceanGkeImport#cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#location OceanGkeImport#location}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.backendServices">backendServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>></code> | backend_services block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.blacklist">blacklist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#blacklist OceanGkeImport#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.controllerClusterId">controllerClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#controller_cluster_id OceanGkeImport#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#desired_capacity OceanGkeImport#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#id OceanGkeImport#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#max_size OceanGkeImport#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#min_size OceanGkeImport#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.rootVolumeType">rootVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#root_volume_type OceanGkeImport#root_volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.scheduledTask">scheduledTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>></code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.strategy">strategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.useAsTemplateOnly">useAsTemplateOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#use_as_template_only OceanGkeImport#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.whitelist">whitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#whitelist OceanGkeImport#whitelist}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#cluster_name OceanGkeImport#cluster_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#location OceanGkeImport#location}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.autoscaler"></a>

```java
public OceanGkeImportAutoscaler getAutoscaler();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#autoscaler OceanGkeImport#autoscaler}

---

##### `backendServices`<sup>Optional</sup> <a name="backendServices" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.backendServices"></a>

```java
public java.lang.Object getBackendServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>>

backend_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#backend_services OceanGkeImport#backend_services}

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.blacklist"></a>

```java
public java.util.List<java.lang.String> getBlacklist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#blacklist OceanGkeImport#blacklist}.

---

##### `controllerClusterId`<sup>Optional</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.controllerClusterId"></a>

```java
public java.lang.String getControllerClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#controller_cluster_id OceanGkeImport#controller_cluster_id}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#desired_capacity OceanGkeImport#desired_capacity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#id OceanGkeImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#max_size OceanGkeImport#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#min_size OceanGkeImport#min_size}.

---

##### `rootVolumeType`<sup>Optional</sup> <a name="rootVolumeType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.rootVolumeType"></a>

```java
public java.lang.String getRootVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#root_volume_type OceanGkeImport#root_volume_type}.

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.scheduledTask"></a>

```java
public java.lang.Object getScheduledTask();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>>

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#scheduled_task OceanGkeImport#scheduled_task}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.shieldedInstanceConfig"></a>

```java
public OceanGkeImportShieldedInstanceConfig getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#shielded_instance_config OceanGkeImport#shielded_instance_config}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.strategy"></a>

```java
public java.lang.Object getStrategy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#strategy OceanGkeImport#strategy}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.updatePolicy"></a>

```java
public OceanGkeImportUpdatePolicy getUpdatePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#update_policy OceanGkeImport#update_policy}

---

##### `useAsTemplateOnly`<sup>Optional</sup> <a name="useAsTemplateOnly" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.useAsTemplateOnly"></a>

```java
public java.lang.Object getUseAsTemplateOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#use_as_template_only OceanGkeImport#use_as_template_only}.

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportConfig.property.whitelist"></a>

```java
public java.util.List<java.lang.String> getWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#whitelist OceanGkeImport#whitelist}.

---

### OceanGkeImportScheduledTask <a name="OceanGkeImportScheduledTask" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTask;

OceanGkeImportScheduledTask.builder()
//  .shutdownHours(OceanGkeImportScheduledTaskShutdownHours)
//  .tasks(IResolvable)
//  .tasks(java.util.List<OceanGkeImportScheduledTaskTasks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask.property.shutdownHours">shutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask.property.tasks">tasks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>></code> | tasks block. |

---

##### `shutdownHours`<sup>Optional</sup> <a name="shutdownHours" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask.property.shutdownHours"></a>

```java
public OceanGkeImportScheduledTaskShutdownHours getShutdownHours();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#shutdown_hours OceanGkeImport#shutdown_hours}

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask.property.tasks"></a>

```java
public java.lang.Object getTasks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#tasks OceanGkeImport#tasks}

---

### OceanGkeImportScheduledTaskShutdownHours <a name="OceanGkeImportScheduledTaskShutdownHours" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTaskShutdownHours;

OceanGkeImportScheduledTaskShutdownHours.builder()
    .timeWindows(java.util.List<java.lang.String>)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours.property.timeWindows">timeWindows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#time_windows OceanGkeImport#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}. |

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours.property.timeWindows"></a>

```java
public java.util.List<java.lang.String> getTimeWindows();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#time_windows OceanGkeImport#time_windows}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}.

---

### OceanGkeImportScheduledTaskTasks <a name="OceanGkeImportScheduledTaskTasks" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTaskTasks;

OceanGkeImportScheduledTaskTasks.builder()
    .cronExpression(java.lang.String)
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .taskType(java.lang.String)
//  .taskParameters(OceanGkeImportScheduledTaskTasksTaskParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#cron_expression OceanGkeImport#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#task_type OceanGkeImport#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.taskParameters">taskParameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a></code> | task_parameters block. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#cron_expression OceanGkeImport#cron_expression}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#is_enabled OceanGkeImport#is_enabled}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#task_type OceanGkeImport#task_type}.

---

##### `taskParameters`<sup>Optional</sup> <a name="taskParameters" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks.property.taskParameters"></a>

```java
public OceanGkeImportScheduledTaskTasksTaskParameters getTaskParameters();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a>

task_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#task_parameters OceanGkeImport#task_parameters}

---

### OceanGkeImportScheduledTaskTasksTaskParameters <a name="OceanGkeImportScheduledTaskTasksTaskParameters" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTaskTasksTaskParameters;

OceanGkeImportScheduledTaskTasksTaskParameters.builder()
//  .clusterRoll(OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters.property.clusterRoll">clusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a></code> | cluster_roll block. |

---

##### `clusterRoll`<sup>Optional</sup> <a name="clusterRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters.property.clusterRoll"></a>

```java
public OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll getClusterRoll();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a>

cluster_roll block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#cluster_roll OceanGkeImport#cluster_roll}

---

### OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll <a name="OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll;

OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.builder()
//  .batchMinHealthyPercentage(java.lang.Number)
//  .batchSizePercentage(java.lang.Number)
//  .comment(java.lang.String)
//  .respectPdb(java.lang.Boolean)
//  .respectPdb(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#batch_min_healthy_percentage OceanGkeImport#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#batch_size_percentage OceanGkeImport#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#comment OceanGkeImport#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.respectPdb">respectPdb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#respect_pdb OceanGkeImport#respect_pdb}. |

---

##### `batchMinHealthyPercentage`<sup>Optional</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.batchMinHealthyPercentage"></a>

```java
public java.lang.Number getBatchMinHealthyPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#batch_min_healthy_percentage OceanGkeImport#batch_min_healthy_percentage}.

---

##### `batchSizePercentage`<sup>Optional</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#batch_size_percentage OceanGkeImport#batch_size_percentage}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#comment OceanGkeImport#comment}.

---

##### `respectPdb`<sup>Optional</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll.property.respectPdb"></a>

```java
public java.lang.Object getRespectPdb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#respect_pdb OceanGkeImport#respect_pdb}.

---

### OceanGkeImportShieldedInstanceConfig <a name="OceanGkeImportShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportShieldedInstanceConfig;

OceanGkeImportShieldedInstanceConfig.builder()
//  .enableIntegrityMonitoring(java.lang.Boolean)
//  .enableIntegrityMonitoring(IResolvable)
//  .enableSecureBoot(java.lang.Boolean)
//  .enableSecureBoot(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#enable_integrity_monitoring OceanGkeImport#enable_integrity_monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#enable_secure_boot OceanGkeImport#enable_secure_boot}. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#enable_integrity_monitoring OceanGkeImport#enable_integrity_monitoring}.

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#enable_secure_boot OceanGkeImport#enable_secure_boot}.

---

### OceanGkeImportStrategy <a name="OceanGkeImportStrategy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportStrategy;

OceanGkeImportStrategy.builder()
//  .drainingTimeout(java.lang.Number)
//  .preemptiblePercentage(java.lang.Number)
//  .provisioningModel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#draining_timeout OceanGkeImport#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#preemptible_percentage OceanGkeImport#preemptible_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#provisioning_model OceanGkeImport#provisioning_model}. |

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.drainingTimeout"></a>

```java
public java.lang.Number getDrainingTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#draining_timeout OceanGkeImport#draining_timeout}.

---

##### `preemptiblePercentage`<sup>Optional</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.preemptiblePercentage"></a>

```java
public java.lang.Number getPreemptiblePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#preemptible_percentage OceanGkeImport#preemptible_percentage}.

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#provisioning_model OceanGkeImport#provisioning_model}.

---

### OceanGkeImportUpdatePolicy <a name="OceanGkeImportUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportUpdatePolicy;

OceanGkeImportUpdatePolicy.builder()
    .shouldRoll(java.lang.Boolean)
    .shouldRoll(IResolvable)
//  .conditionedRoll(java.lang.Boolean)
//  .conditionedRoll(IResolvable)
//  .rollConfig(OceanGkeImportUpdatePolicyRollConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.shouldRoll">shouldRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#should_roll OceanGkeImport#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.conditionedRoll">conditionedRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#conditioned_roll OceanGkeImport#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.shouldRoll"></a>

```java
public java.lang.Object getShouldRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#should_roll OceanGkeImport#should_roll}.

---

##### `conditionedRoll`<sup>Optional</sup> <a name="conditionedRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.conditionedRoll"></a>

```java
public java.lang.Object getConditionedRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#conditioned_roll OceanGkeImport#conditioned_roll}.

---

##### `rollConfig`<sup>Optional</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy.property.rollConfig"></a>

```java
public OceanGkeImportUpdatePolicyRollConfig getRollConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#roll_config OceanGkeImport#roll_config}

---

### OceanGkeImportUpdatePolicyRollConfig <a name="OceanGkeImportUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportUpdatePolicyRollConfig;

OceanGkeImportUpdatePolicyRollConfig.builder()
    .batchSizePercentage(java.lang.Number)
//  .batchMinHealthyPercentage(java.lang.Number)
//  .launchSpecIds(java.util.List<java.lang.String>)
//  .respectPdb(java.lang.Boolean)
//  .respectPdb(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#batch_size_percentage OceanGkeImport#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#batch_min_healthy_percentage OceanGkeImport#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.launchSpecIds">launchSpecIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#launch_spec_ids OceanGkeImport#launch_spec_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.respectPdb">respectPdb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#respect_pdb OceanGkeImport#respect_pdb}. |

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#batch_size_percentage OceanGkeImport#batch_size_percentage}.

---

##### `batchMinHealthyPercentage`<sup>Optional</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```java
public java.lang.Number getBatchMinHealthyPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#batch_min_healthy_percentage OceanGkeImport#batch_min_healthy_percentage}.

---

##### `launchSpecIds`<sup>Optional</sup> <a name="launchSpecIds" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.launchSpecIds"></a>

```java
public java.util.List<java.lang.String> getLaunchSpecIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#launch_spec_ids OceanGkeImport#launch_spec_ids}.

---

##### `respectPdb`<sup>Optional</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig.property.respectPdb"></a>

```java
public java.lang.Object getRespectPdb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.0/docs/resources/ocean_gke_import#respect_pdb OceanGkeImport#respect_pdb}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanGkeImportAutoscalerDownOutputReference <a name="OceanGkeImportAutoscalerDownOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportAutoscalerDownOutputReference;

new OceanGkeImportAutoscalerDownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resetMaxScaleDownPercentage">resetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetMaxScaleDownPercentage` <a name="resetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.resetMaxScaleDownPercentage"></a>

```java
public void resetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.maxScaleDownPercentageInput">maxScaleDownPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `maxScaleDownPercentageInput`<sup>Optional</sup> <a name="maxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.maxScaleDownPercentageInput"></a>

```java
public java.lang.Number getMaxScaleDownPercentageInput();
```

- *Type:* java.lang.Number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `maxScaleDownPercentage`<sup>Required</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.maxScaleDownPercentage"></a>

```java
public java.lang.Number getMaxScaleDownPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference.property.internalValue"></a>

```java
public OceanGkeImportAutoscalerDown getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a>

---


### OceanGkeImportAutoscalerHeadroomOutputReference <a name="OceanGkeImportAutoscalerHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportAutoscalerHeadroomOutputReference;

new OceanGkeImportAutoscalerHeadroomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetNumOfUnits">resetNumOfUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetCpuPerUnit"></a>

```java
public void resetCpuPerUnit()
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetGpuPerUnit"></a>

```java
public void resetGpuPerUnit()
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetMemoryPerUnit"></a>

```java
public void resetMemoryPerUnit()
```

##### `resetNumOfUnits` <a name="resetNumOfUnits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.resetNumOfUnits"></a>

```java
public void resetNumOfUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.cpuPerUnitInput"></a>

```java
public java.lang.Number getCpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.gpuPerUnitInput"></a>

```java
public java.lang.Number getGpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.memoryPerUnitInput"></a>

```java
public java.lang.Number getMemoryPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.numOfUnitsInput"></a>

```java
public java.lang.Number getNumOfUnitsInput();
```

- *Type:* java.lang.Number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.gpuPerUnit"></a>

```java
public java.lang.Number getGpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference.property.internalValue"></a>

```java
public OceanGkeImportAutoscalerHeadroom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a>

---


### OceanGkeImportAutoscalerOutputReference <a name="OceanGkeImportAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportAutoscalerOutputReference;

new OceanGkeImportAutoscalerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putDown">putDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putHeadroom">putHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putResourceLimits">putResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetAutoHeadroomPercentage">resetAutoHeadroomPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetDown">resetDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom">resetEnableAutomaticAndManualHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetHeadroom">resetHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetIsAutoConfig">resetIsAutoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDown` <a name="putDown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putDown"></a>

```java
public void putDown(OceanGkeImportAutoscalerDown value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a>

---

##### `putHeadroom` <a name="putHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putHeadroom"></a>

```java
public void putHeadroom(OceanGkeImportAutoscalerHeadroom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a>

---

##### `putResourceLimits` <a name="putResourceLimits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putResourceLimits"></a>

```java
public void putResourceLimits(OceanGkeImportAutoscalerResourceLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a>

---

##### `resetAutoHeadroomPercentage` <a name="resetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetAutoHeadroomPercentage"></a>

```java
public void resetAutoHeadroomPercentage()
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetCooldown"></a>

```java
public void resetCooldown()
```

##### `resetDown` <a name="resetDown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetDown"></a>

```java
public void resetDown()
```

##### `resetEnableAutomaticAndManualHeadroom` <a name="resetEnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom"></a>

```java
public void resetEnableAutomaticAndManualHeadroom()
```

##### `resetHeadroom` <a name="resetHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetHeadroom"></a>

```java
public void resetHeadroom()
```

##### `resetIsAutoConfig` <a name="resetIsAutoConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetIsAutoConfig"></a>

```java
public void resetIsAutoConfig()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.resetResourceLimits"></a>

```java
public void resetResourceLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.down">down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference">OceanGkeImportAutoscalerDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.headroom">headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference">OceanGkeImportAutoscalerHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference">OceanGkeImportAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.autoHeadroomPercentageInput">autoHeadroomPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.downInput">downInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput">enableAutomaticAndManualHeadroomInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.headroomInput">headroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isAutoConfigInput">isAutoConfigInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom">enableAutomaticAndManualHeadroom</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isAutoConfig">isAutoConfig</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `down`<sup>Required</sup> <a name="down" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.down"></a>

```java
public OceanGkeImportAutoscalerDownOutputReference getDown();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDownOutputReference">OceanGkeImportAutoscalerDownOutputReference</a>

---

##### `headroom`<sup>Required</sup> <a name="headroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.headroom"></a>

```java
public OceanGkeImportAutoscalerHeadroomOutputReference getHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroomOutputReference">OceanGkeImportAutoscalerHeadroomOutputReference</a>

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.resourceLimits"></a>

```java
public OceanGkeImportAutoscalerResourceLimitsOutputReference getResourceLimits();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference">OceanGkeImportAutoscalerResourceLimitsOutputReference</a>

---

##### `autoHeadroomPercentageInput`<sup>Optional</sup> <a name="autoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.autoHeadroomPercentageInput"></a>

```java
public java.lang.Number getAutoHeadroomPercentageInput();
```

- *Type:* java.lang.Number

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.cooldownInput"></a>

```java
public java.lang.Number getCooldownInput();
```

- *Type:* java.lang.Number

---

##### `downInput`<sup>Optional</sup> <a name="downInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.downInput"></a>

```java
public OceanGkeImportAutoscalerDown getDownInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerDown">OceanGkeImportAutoscalerDown</a>

---

##### `enableAutomaticAndManualHeadroomInput`<sup>Optional</sup> <a name="enableAutomaticAndManualHeadroomInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput"></a>

```java
public java.lang.Object getEnableAutomaticAndManualHeadroomInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headroomInput`<sup>Optional</sup> <a name="headroomInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.headroomInput"></a>

```java
public OceanGkeImportAutoscalerHeadroom getHeadroomInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerHeadroom">OceanGkeImportAutoscalerHeadroom</a>

---

##### `isAutoConfigInput`<sup>Optional</sup> <a name="isAutoConfigInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isAutoConfigInput"></a>

```java
public java.lang.Object getIsAutoConfigInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.resourceLimitsInput"></a>

```java
public OceanGkeImportAutoscalerResourceLimits getResourceLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a>

---

##### `autoHeadroomPercentage`<sup>Required</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.autoHeadroomPercentage"></a>

```java
public java.lang.Number getAutoHeadroomPercentage();
```

- *Type:* java.lang.Number

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

---

##### `enableAutomaticAndManualHeadroom`<sup>Required</sup> <a name="enableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom"></a>

```java
public java.lang.Object getEnableAutomaticAndManualHeadroom();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isAutoConfig`<sup>Required</sup> <a name="isAutoConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isAutoConfig"></a>

```java
public java.lang.Object getIsAutoConfig();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerOutputReference.property.internalValue"></a>

```java
public OceanGkeImportAutoscaler getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscaler">OceanGkeImportAutoscaler</a>

---


### OceanGkeImportAutoscalerResourceLimitsOutputReference <a name="OceanGkeImportAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportAutoscalerResourceLimitsOutputReference;

new OceanGkeImportAutoscalerResourceLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">resetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resetMaxVcpu">resetMaxVcpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxMemoryGib` <a name="resetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```java
public void resetMaxMemoryGib()
```

##### `resetMaxVcpu` <a name="resetMaxVcpu" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```java
public void resetMaxVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">maxMemoryGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">maxVcpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxMemoryGibInput`<sup>Optional</sup> <a name="maxMemoryGibInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```java
public java.lang.Number getMaxMemoryGibInput();
```

- *Type:* java.lang.Number

---

##### `maxVcpuInput`<sup>Optional</sup> <a name="maxVcpuInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```java
public java.lang.Number getMaxVcpuInput();
```

- *Type:* java.lang.Number

---

##### `maxMemoryGib`<sup>Required</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

---

##### `maxVcpu`<sup>Required</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```java
public OceanGkeImportAutoscalerResourceLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportAutoscalerResourceLimits">OceanGkeImportAutoscalerResourceLimits</a>

---


### OceanGkeImportBackendServicesList <a name="OceanGkeImportBackendServicesList" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportBackendServicesList;

new OceanGkeImportBackendServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.get"></a>

```java
public OceanGkeImportBackendServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>>

---


### OceanGkeImportBackendServicesNamedPortsList <a name="OceanGkeImportBackendServicesNamedPortsList" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportBackendServicesNamedPortsList;

new OceanGkeImportBackendServicesNamedPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.get"></a>

```java
public OceanGkeImportBackendServicesNamedPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>>

---


### OceanGkeImportBackendServicesNamedPortsOutputReference <a name="OceanGkeImportBackendServicesNamedPortsOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportBackendServicesNamedPortsOutputReference;

new OceanGkeImportBackendServicesNamedPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.String> getPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>

---


### OceanGkeImportBackendServicesOutputReference <a name="OceanGkeImportBackendServicesOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportBackendServicesOutputReference;

new OceanGkeImportBackendServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.putNamedPorts">putNamedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetLocationType">resetLocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetNamedPorts">resetNamedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamedPorts` <a name="putNamedPorts" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.putNamedPorts"></a>

```java
public void putNamedPorts(IResolvable OR java.util.List<OceanGkeImportBackendServicesNamedPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.putNamedPorts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>>

---

##### `resetLocationType` <a name="resetLocationType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetLocationType"></a>

```java
public void resetLocationType()
```

##### `resetNamedPorts` <a name="resetNamedPorts" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetNamedPorts"></a>

```java
public void resetNamedPorts()
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.resetScheme"></a>

```java
public void resetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.namedPorts">namedPorts</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList">OceanGkeImportBackendServicesNamedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.namedPortsInput">namedPortsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.locationType">locationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namedPorts`<sup>Required</sup> <a name="namedPorts" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.namedPorts"></a>

```java
public OceanGkeImportBackendServicesNamedPortsList getNamedPorts();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPortsList">OceanGkeImportBackendServicesNamedPortsList</a>

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.locationTypeInput"></a>

```java
public java.lang.String getLocationTypeInput();
```

- *Type:* java.lang.String

---

##### `namedPortsInput`<sup>Optional</sup> <a name="namedPortsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.namedPortsInput"></a>

```java
public java.lang.Object getNamedPortsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesNamedPorts">OceanGkeImportBackendServicesNamedPorts</a>>

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportBackendServices">OceanGkeImportBackendServices</a>

---


### OceanGkeImportScheduledTaskList <a name="OceanGkeImportScheduledTaskList" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTaskList;

new OceanGkeImportScheduledTaskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.get"></a>

```java
public OceanGkeImportScheduledTaskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>>

---


### OceanGkeImportScheduledTaskOutputReference <a name="OceanGkeImportScheduledTaskOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTaskOutputReference;

new OceanGkeImportScheduledTaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putShutdownHours">putShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putTasks">putTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resetShutdownHours">resetShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resetTasks">resetTasks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShutdownHours` <a name="putShutdownHours" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putShutdownHours"></a>

```java
public void putShutdownHours(OceanGkeImportScheduledTaskShutdownHours value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a>

---

##### `putTasks` <a name="putTasks" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putTasks"></a>

```java
public void putTasks(IResolvable OR java.util.List<OceanGkeImportScheduledTaskTasks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.putTasks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>>

---

##### `resetShutdownHours` <a name="resetShutdownHours" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resetShutdownHours"></a>

```java
public void resetShutdownHours()
```

##### `resetTasks` <a name="resetTasks" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.resetTasks"></a>

```java
public void resetTasks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.shutdownHours">shutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference">OceanGkeImportScheduledTaskShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.tasks">tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList">OceanGkeImportScheduledTaskTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.shutdownHoursInput">shutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.tasksInput">tasksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shutdownHours`<sup>Required</sup> <a name="shutdownHours" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.shutdownHours"></a>

```java
public OceanGkeImportScheduledTaskShutdownHoursOutputReference getShutdownHours();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference">OceanGkeImportScheduledTaskShutdownHoursOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.tasks"></a>

```java
public OceanGkeImportScheduledTaskTasksList getTasks();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList">OceanGkeImportScheduledTaskTasksList</a>

---

##### `shutdownHoursInput`<sup>Optional</sup> <a name="shutdownHoursInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.shutdownHoursInput"></a>

```java
public OceanGkeImportScheduledTaskShutdownHours getShutdownHoursInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a>

---

##### `tasksInput`<sup>Optional</sup> <a name="tasksInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.tasksInput"></a>

```java
public java.lang.Object getTasksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTask">OceanGkeImportScheduledTask</a>

---


### OceanGkeImportScheduledTaskShutdownHoursOutputReference <a name="OceanGkeImportScheduledTaskShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTaskShutdownHoursOutputReference;

new OceanGkeImportScheduledTaskShutdownHoursOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput">timeWindowsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.timeWindows">timeWindows</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeWindowsInput`<sup>Optional</sup> <a name="timeWindowsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput"></a>

```java
public java.util.List<java.lang.String> getTimeWindowsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.timeWindows"></a>

```java
public java.util.List<java.lang.String> getTimeWindows();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHoursOutputReference.property.internalValue"></a>

```java
public OceanGkeImportScheduledTaskShutdownHours getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskShutdownHours">OceanGkeImportScheduledTaskShutdownHours</a>

---


### OceanGkeImportScheduledTaskTasksList <a name="OceanGkeImportScheduledTaskTasksList" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTaskTasksList;

new OceanGkeImportScheduledTaskTasksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.get"></a>

```java
public OceanGkeImportScheduledTaskTasksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>>

---


### OceanGkeImportScheduledTaskTasksOutputReference <a name="OceanGkeImportScheduledTaskTasksOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTaskTasksOutputReference;

new OceanGkeImportScheduledTaskTasksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.putTaskParameters">putTaskParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.resetTaskParameters">resetTaskParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaskParameters` <a name="putTaskParameters" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.putTaskParameters"></a>

```java
public void putTaskParameters(OceanGkeImportScheduledTaskTasksTaskParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.putTaskParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a>

---

##### `resetTaskParameters` <a name="resetTaskParameters" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.resetTaskParameters"></a>

```java
public void resetTaskParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskParameters">taskParameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference">OceanGkeImportScheduledTaskTasksTaskParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskParametersInput">taskParametersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `taskParameters`<sup>Required</sup> <a name="taskParameters" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskParameters"></a>

```java
public OceanGkeImportScheduledTaskTasksTaskParametersOutputReference getTaskParameters();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference">OceanGkeImportScheduledTaskTasksTaskParametersOutputReference</a>

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskParametersInput`<sup>Optional</sup> <a name="taskParametersInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskParametersInput"></a>

```java
public OceanGkeImportScheduledTaskTasksTaskParameters getTaskParametersInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a>

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskTypeInput"></a>

```java
public java.lang.String getTaskTypeInput();
```

- *Type:* java.lang.String

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasks">OceanGkeImportScheduledTaskTasks</a>

---


### OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference <a name="OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference;

new OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetBatchMinHealthyPercentage">resetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetBatchSizePercentage">resetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetRespectPdb">resetRespectPdb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchMinHealthyPercentage` <a name="resetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetBatchMinHealthyPercentage"></a>

```java
public void resetBatchMinHealthyPercentage()
```

##### `resetBatchSizePercentage` <a name="resetBatchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetBatchSizePercentage"></a>

```java
public void resetBatchSizePercentage()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetRespectPdb` <a name="resetRespectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.resetRespectPdb"></a>

```java
public void resetRespectPdb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput">batchMinHealthyPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.respectPdbInput">respectPdbInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.respectPdb">respectPdb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchMinHealthyPercentageInput`<sup>Optional</sup> <a name="batchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput"></a>

```java
public java.lang.Number getBatchMinHealthyPercentageInput();
```

- *Type:* java.lang.Number

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchSizePercentageInput"></a>

```java
public java.lang.Number getBatchSizePercentageInput();
```

- *Type:* java.lang.Number

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `respectPdbInput`<sup>Optional</sup> <a name="respectPdbInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.respectPdbInput"></a>

```java
public java.lang.Object getRespectPdbInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `batchMinHealthyPercentage`<sup>Required</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchMinHealthyPercentage"></a>

```java
public java.lang.Number getBatchMinHealthyPercentage();
```

- *Type:* java.lang.Number

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `respectPdb`<sup>Required</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.respectPdb"></a>

```java
public java.lang.Object getRespectPdb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference.property.internalValue"></a>

```java
public OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a>

---


### OceanGkeImportScheduledTaskTasksTaskParametersOutputReference <a name="OceanGkeImportScheduledTaskTasksTaskParametersOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference;

new OceanGkeImportScheduledTaskTasksTaskParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.putClusterRoll">putClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.resetClusterRoll">resetClusterRoll</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterRoll` <a name="putClusterRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.putClusterRoll"></a>

```java
public void putClusterRoll(OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.putClusterRoll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a>

---

##### `resetClusterRoll` <a name="resetClusterRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.resetClusterRoll"></a>

```java
public void resetClusterRoll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.clusterRoll">clusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference">OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.clusterRollInput">clusterRollInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterRoll`<sup>Required</sup> <a name="clusterRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.clusterRoll"></a>

```java
public OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference getClusterRoll();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference">OceanGkeImportScheduledTaskTasksTaskParametersClusterRollOutputReference</a>

---

##### `clusterRollInput`<sup>Optional</sup> <a name="clusterRollInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.clusterRollInput"></a>

```java
public OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll getClusterRollInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll">OceanGkeImportScheduledTaskTasksTaskParametersClusterRoll</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParametersOutputReference.property.internalValue"></a>

```java
public OceanGkeImportScheduledTaskTasksTaskParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportScheduledTaskTasksTaskParameters">OceanGkeImportScheduledTaskTasksTaskParameters</a>

---


### OceanGkeImportShieldedInstanceConfigOutputReference <a name="OceanGkeImportShieldedInstanceConfigOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportShieldedInstanceConfigOutputReference;

new OceanGkeImportShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```java
public void resetEnableIntegrityMonitoring()
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```java
public java.lang.Object getEnableIntegrityMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Object getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public OceanGkeImportShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportShieldedInstanceConfig">OceanGkeImportShieldedInstanceConfig</a>

---


### OceanGkeImportStrategyList <a name="OceanGkeImportStrategyList" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportStrategyList;

new OceanGkeImportStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.get"></a>

```java
public OceanGkeImportStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>>

---


### OceanGkeImportStrategyOutputReference <a name="OceanGkeImportStrategyOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportStrategyOutputReference;

new OceanGkeImportStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetPreemptiblePercentage">resetPreemptiblePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetDrainingTimeout"></a>

```java
public void resetDrainingTimeout()
```

##### `resetPreemptiblePercentage` <a name="resetPreemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetPreemptiblePercentage"></a>

```java
public void resetPreemptiblePercentage()
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.resetProvisioningModel"></a>

```java
public void resetProvisioningModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.preemptiblePercentageInput">preemptiblePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.provisioningModelInput">provisioningModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.drainingTimeoutInput"></a>

```java
public java.lang.Number getDrainingTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `preemptiblePercentageInput`<sup>Optional</sup> <a name="preemptiblePercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.preemptiblePercentageInput"></a>

```java
public java.lang.Number getPreemptiblePercentageInput();
```

- *Type:* java.lang.Number

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.provisioningModelInput"></a>

```java
public java.lang.String getProvisioningModelInput();
```

- *Type:* java.lang.String

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.drainingTimeout"></a>

```java
public java.lang.Number getDrainingTimeout();
```

- *Type:* java.lang.Number

---

##### `preemptiblePercentage`<sup>Required</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.preemptiblePercentage"></a>

```java
public java.lang.Number getPreemptiblePercentage();
```

- *Type:* java.lang.Number

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportStrategy">OceanGkeImportStrategy</a>

---


### OceanGkeImportUpdatePolicyOutputReference <a name="OceanGkeImportUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportUpdatePolicyOutputReference;

new OceanGkeImportUpdatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.putRollConfig">putRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resetConditionedRoll">resetConditionedRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resetRollConfig">resetRollConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRollConfig` <a name="putRollConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.putRollConfig"></a>

```java
public void putRollConfig(OceanGkeImportUpdatePolicyRollConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a>

---

##### `resetConditionedRoll` <a name="resetConditionedRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resetConditionedRoll"></a>

```java
public void resetConditionedRoll()
```

##### `resetRollConfig` <a name="resetRollConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.resetRollConfig"></a>

```java
public void resetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference">OceanGkeImportUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.conditionedRollInput">conditionedRollInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.rollConfigInput">rollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.shouldRollInput">shouldRollInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.conditionedRoll">conditionedRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.shouldRoll">shouldRoll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rollConfig`<sup>Required</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.rollConfig"></a>

```java
public OceanGkeImportUpdatePolicyRollConfigOutputReference getRollConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference">OceanGkeImportUpdatePolicyRollConfigOutputReference</a>

---

##### `conditionedRollInput`<sup>Optional</sup> <a name="conditionedRollInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```java
public java.lang.Object getConditionedRollInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollConfigInput`<sup>Optional</sup> <a name="rollConfigInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.rollConfigInput"></a>

```java
public OceanGkeImportUpdatePolicyRollConfig getRollConfigInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a>

---

##### `shouldRollInput`<sup>Optional</sup> <a name="shouldRollInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.shouldRollInput"></a>

```java
public java.lang.Object getShouldRollInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `conditionedRoll`<sup>Required</sup> <a name="conditionedRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.conditionedRoll"></a>

```java
public java.lang.Object getConditionedRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.shouldRoll"></a>

```java
public java.lang.Object getShouldRoll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyOutputReference.property.internalValue"></a>

```java
public OceanGkeImportUpdatePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicy">OceanGkeImportUpdatePolicy</a>

---


### OceanGkeImportUpdatePolicyRollConfigOutputReference <a name="OceanGkeImportUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_gke_import.OceanGkeImportUpdatePolicyRollConfigOutputReference;

new OceanGkeImportUpdatePolicyRollConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">resetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds">resetLaunchSpecIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetRespectPdb">resetRespectPdb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchMinHealthyPercentage` <a name="resetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```java
public void resetBatchMinHealthyPercentage()
```

##### `resetLaunchSpecIds` <a name="resetLaunchSpecIds" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds"></a>

```java
public void resetLaunchSpecIds()
```

##### `resetRespectPdb` <a name="resetRespectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.resetRespectPdb"></a>

```java
public void resetRespectPdb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">batchMinHealthyPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput">launchSpecIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.respectPdbInput">respectPdbInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.launchSpecIds">launchSpecIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.respectPdb">respectPdb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchMinHealthyPercentageInput`<sup>Optional</sup> <a name="batchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```java
public java.lang.Number getBatchMinHealthyPercentageInput();
```

- *Type:* java.lang.Number

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```java
public java.lang.Number getBatchSizePercentageInput();
```

- *Type:* java.lang.Number

---

##### `launchSpecIdsInput`<sup>Optional</sup> <a name="launchSpecIdsInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput"></a>

```java
public java.util.List<java.lang.String> getLaunchSpecIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `respectPdbInput`<sup>Optional</sup> <a name="respectPdbInput" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.respectPdbInput"></a>

```java
public java.lang.Object getRespectPdbInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `batchMinHealthyPercentage`<sup>Required</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```java
public java.lang.Number getBatchMinHealthyPercentage();
```

- *Type:* java.lang.Number

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```java
public java.lang.Number getBatchSizePercentage();
```

- *Type:* java.lang.Number

---

##### `launchSpecIds`<sup>Required</sup> <a name="launchSpecIds" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.launchSpecIds"></a>

```java
public java.util.List<java.lang.String> getLaunchSpecIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `respectPdb`<sup>Required</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.respectPdb"></a>

```java
public java.lang.Object getRespectPdb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```java
public OceanGkeImportUpdatePolicyRollConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeImport.OceanGkeImportUpdatePolicyRollConfig">OceanGkeImportUpdatePolicyRollConfig</a>

---



