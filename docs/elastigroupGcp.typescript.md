# `spotinst_elastigroup_gcp`

Refer to the Terraform Registory for docs: [`spotinst_elastigroup_gcp`](https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp).

# `elastigroupGcp` Submodule <a name="`elastigroupGcp` Submodule" id="@cdktf/provider-spotinst.elastigroupGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupGcp <a name="ElastigroupGcp" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp"></a>

Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp spotinst_elastigroup_gcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcp(scope: Construct, id: string, config: ElastigroupGcpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig">ElastigroupGcpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig">ElastigroupGcpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putBackendServices">putBackendServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putGpu">putGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putInstanceTypesCustom">putInstanceTypesCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationDockerSwarm">putIntegrationDockerSwarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke">putIntegrationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingDownPolicy">putScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingUpPolicy">putScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScheduledTask">putScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putSubnets">putSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetBackendServices">resetBackendServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetFallbackToOndemand">resetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetGpu">resetGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckGracePeriod">resetHealthCheckGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckType">resetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceNamePrefix">resetInstanceNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesCustom">resetInstanceTypesCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesOndemand">resetInstanceTypesOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesPreemptible">resetInstanceTypesPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationDockerSwarm">resetIntegrationDockerSwarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationGke">resetIntegrationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIpForwarding">resetIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOndemandCount">resetOndemandCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetPreemptiblePercentage">resetPreemptiblePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingDownPolicy">resetScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingUpPolicy">resetScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScheduledTask">resetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetShutdownScript">resetShutdownScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetStartupScript">resetStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetUnhealthyDuration">resetUnhealthyDuration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putBackendServices` <a name="putBackendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putBackendServices"></a>

```typescript
public putBackendServices(value: IResolvable | ElastigroupGcpBackendServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putBackendServices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>[]

---

##### `putDisk` <a name="putDisk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putDisk"></a>

```typescript
public putDisk(value: IResolvable | ElastigroupGcpDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>[]

---

##### `putGpu` <a name="putGpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putGpu"></a>

```typescript
public putGpu(value: IResolvable | ElastigroupGcpGpu[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putGpu.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>[]

---

##### `putInstanceTypesCustom` <a name="putInstanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putInstanceTypesCustom"></a>

```typescript
public putInstanceTypesCustom(value: IResolvable | ElastigroupGcpInstanceTypesCustom[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putInstanceTypesCustom.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>[]

---

##### `putIntegrationDockerSwarm` <a name="putIntegrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationDockerSwarm"></a>

```typescript
public putIntegrationDockerSwarm(value: ElastigroupGcpIntegrationDockerSwarm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationDockerSwarm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

---

##### `putIntegrationGke` <a name="putIntegrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke"></a>

```typescript
public putIntegrationGke(value: ElastigroupGcpIntegrationGke): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putLabels"></a>

```typescript
public putLabels(value: IResolvable | ElastigroupGcpLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>[]

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putMetadata"></a>

```typescript
public putMetadata(value: IResolvable | ElastigroupGcpMetadata[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putMetadata.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>[]

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | ElastigroupGcpNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>[]

---

##### `putScalingDownPolicy` <a name="putScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingDownPolicy"></a>

```typescript
public putScalingDownPolicy(value: IResolvable | ElastigroupGcpScalingDownPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingDownPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>[]

---

##### `putScalingUpPolicy` <a name="putScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingUpPolicy"></a>

```typescript
public putScalingUpPolicy(value: IResolvable | ElastigroupGcpScalingUpPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingUpPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>[]

---

##### `putScheduledTask` <a name="putScheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScheduledTask"></a>

```typescript
public putScheduledTask(value: IResolvable | ElastigroupGcpScheduledTask[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScheduledTask.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>[]

---

##### `putSubnets` <a name="putSubnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putSubnets"></a>

```typescript
public putSubnets(value: IResolvable | ElastigroupGcpSubnets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putSubnets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>[]

---

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAutoHealing"></a>

```typescript
public resetAutoHealing(): void
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetBackendServices` <a name="resetBackendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetBackendServices"></a>

```typescript
public resetBackendServices(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDisk"></a>

```typescript
public resetDisk(): void
```

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDrainingTimeout"></a>

```typescript
public resetDrainingTimeout(): void
```

##### `resetFallbackToOndemand` <a name="resetFallbackToOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetFallbackToOndemand"></a>

```typescript
public resetFallbackToOndemand(): void
```

##### `resetGpu` <a name="resetGpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetGpu"></a>

```typescript
public resetGpu(): void
```

##### `resetHealthCheckGracePeriod` <a name="resetHealthCheckGracePeriod" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckGracePeriod"></a>

```typescript
public resetHealthCheckGracePeriod(): void
```

##### `resetHealthCheckType` <a name="resetHealthCheckType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckType"></a>

```typescript
public resetHealthCheckType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceNamePrefix` <a name="resetInstanceNamePrefix" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceNamePrefix"></a>

```typescript
public resetInstanceNamePrefix(): void
```

##### `resetInstanceTypesCustom` <a name="resetInstanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesCustom"></a>

```typescript
public resetInstanceTypesCustom(): void
```

##### `resetInstanceTypesOndemand` <a name="resetInstanceTypesOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesOndemand"></a>

```typescript
public resetInstanceTypesOndemand(): void
```

##### `resetInstanceTypesPreemptible` <a name="resetInstanceTypesPreemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesPreemptible"></a>

```typescript
public resetInstanceTypesPreemptible(): void
```

##### `resetIntegrationDockerSwarm` <a name="resetIntegrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationDockerSwarm"></a>

```typescript
public resetIntegrationDockerSwarm(): void
```

##### `resetIntegrationGke` <a name="resetIntegrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationGke"></a>

```typescript
public resetIntegrationGke(): void
```

##### `resetIpForwarding` <a name="resetIpForwarding" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIpForwarding"></a>

```typescript
public resetIpForwarding(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMaxSize"></a>

```typescript
public resetMaxSize(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMinSize"></a>

```typescript
public resetMinSize(): void
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetNetworkInterface"></a>

```typescript
public resetNetworkInterface(): void
```

##### `resetOndemandCount` <a name="resetOndemandCount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOndemandCount"></a>

```typescript
public resetOndemandCount(): void
```

##### `resetPreemptiblePercentage` <a name="resetPreemptiblePercentage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetPreemptiblePercentage"></a>

```typescript
public resetPreemptiblePercentage(): void
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetProvisioningModel"></a>

```typescript
public resetProvisioningModel(): void
```

##### `resetScalingDownPolicy` <a name="resetScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingDownPolicy"></a>

```typescript
public resetScalingDownPolicy(): void
```

##### `resetScalingUpPolicy` <a name="resetScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingUpPolicy"></a>

```typescript
public resetScalingUpPolicy(): void
```

##### `resetScheduledTask` <a name="resetScheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScheduledTask"></a>

```typescript
public resetScheduledTask(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetShutdownScript` <a name="resetShutdownScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetShutdownScript"></a>

```typescript
public resetShutdownScript(): void
```

##### `resetStartupScript` <a name="resetStartupScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetStartupScript"></a>

```typescript
public resetStartupScript(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetSubnets"></a>

```typescript
public resetSubnets(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUnhealthyDuration` <a name="resetUnhealthyDuration" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetUnhealthyDuration"></a>

```typescript
public resetUnhealthyDuration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isConstruct"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

elastigroupGcp.ElastigroupGcp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformElement"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

elastigroupGcp.ElastigroupGcp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformResource"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

elastigroupGcp.ElastigroupGcp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServices">backendServices</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList">ElastigroupGcpBackendServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList">ElastigroupGcpDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpu">gpu</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList">ElastigroupGcpGpuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustom">instanceTypesCustom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList">ElastigroupGcpInstanceTypesCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarm">integrationDockerSwarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference">ElastigroupGcpIntegrationDockerSwarmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGke">integrationGke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference">ElastigroupGcpIntegrationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList">ElastigroupGcpLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList">ElastigroupGcpMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList">ElastigroupGcpNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicy">scalingDownPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList">ElastigroupGcpScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicy">scalingUpPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList">ElastigroupGcpScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTask">scheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList">ElastigroupGcpScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnets">subnets</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList">ElastigroupGcpSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealingInput">autoHealingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServicesInput">backendServicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.diskInput">diskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemandInput">fallbackToOndemandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpuInput">gpuInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriodInput">healthCheckGracePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefixInput">instanceNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustomInput">instanceTypesCustomInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemandInput">instanceTypesOndemandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptibleInput">instanceTypesPreemptibleInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarmInput">integrationDockerSwarmInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGkeInput">integrationGkeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwardingInput">ipForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadataInput">metadataInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCountInput">ondemandCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentageInput">preemptiblePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModelInput">provisioningModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicyInput">scalingDownPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicyInput">scalingUpPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTaskInput">scheduledTaskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScriptInput">shutdownScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScriptInput">startupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnetsInput">subnetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDurationInput">unhealthyDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefix">instanceNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemand">instanceTypesOndemand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptible">instanceTypesPreemptible</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwarding">ipForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCount">ondemandCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScript">shutdownScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScript">startupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDuration">unhealthyDuration</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendServices`<sup>Required</sup> <a name="backendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServices"></a>

```typescript
public readonly backendServices: ElastigroupGcpBackendServicesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList">ElastigroupGcpBackendServicesList</a>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.disk"></a>

```typescript
public readonly disk: ElastigroupGcpDiskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList">ElastigroupGcpDiskList</a>

---

##### `gpu`<sup>Required</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpu"></a>

```typescript
public readonly gpu: ElastigroupGcpGpuList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList">ElastigroupGcpGpuList</a>

---

##### `instanceTypesCustom`<sup>Required</sup> <a name="instanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustom"></a>

```typescript
public readonly instanceTypesCustom: ElastigroupGcpInstanceTypesCustomList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList">ElastigroupGcpInstanceTypesCustomList</a>

---

##### `integrationDockerSwarm`<sup>Required</sup> <a name="integrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarm"></a>

```typescript
public readonly integrationDockerSwarm: ElastigroupGcpIntegrationDockerSwarmOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference">ElastigroupGcpIntegrationDockerSwarmOutputReference</a>

---

##### `integrationGke`<sup>Required</sup> <a name="integrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGke"></a>

```typescript
public readonly integrationGke: ElastigroupGcpIntegrationGkeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference">ElastigroupGcpIntegrationGkeOutputReference</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labels"></a>

```typescript
public readonly labels: ElastigroupGcpLabelsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList">ElastigroupGcpLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadata"></a>

```typescript
public readonly metadata: ElastigroupGcpMetadataList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList">ElastigroupGcpMetadataList</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterface"></a>

```typescript
public readonly networkInterface: ElastigroupGcpNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList">ElastigroupGcpNetworkInterfaceList</a>

---

##### `scalingDownPolicy`<sup>Required</sup> <a name="scalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicy"></a>

```typescript
public readonly scalingDownPolicy: ElastigroupGcpScalingDownPolicyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList">ElastigroupGcpScalingDownPolicyList</a>

---

##### `scalingUpPolicy`<sup>Required</sup> <a name="scalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicy"></a>

```typescript
public readonly scalingUpPolicy: ElastigroupGcpScalingUpPolicyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList">ElastigroupGcpScalingUpPolicyList</a>

---

##### `scheduledTask`<sup>Required</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTask"></a>

```typescript
public readonly scheduledTask: ElastigroupGcpScheduledTaskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList">ElastigroupGcpScheduledTaskList</a>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnets"></a>

```typescript
public readonly subnets: ElastigroupGcpSubnetsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList">ElastigroupGcpSubnetsList</a>

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealingInput"></a>

```typescript
public readonly autoHealingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `backendServicesInput`<sup>Optional</sup> <a name="backendServicesInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServicesInput"></a>

```typescript
public readonly backendServicesInput: IResolvable | ElastigroupGcpBackendServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacityInput"></a>

```typescript
public readonly desiredCapacityInput: number;
```

- *Type:* number

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.diskInput"></a>

```typescript
public readonly diskInput: IResolvable | ElastigroupGcpDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>[]

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeoutInput"></a>

```typescript
public readonly drainingTimeoutInput: number;
```

- *Type:* number

---

##### `fallbackToOndemandInput`<sup>Optional</sup> <a name="fallbackToOndemandInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemandInput"></a>

```typescript
public readonly fallbackToOndemandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gpuInput`<sup>Optional</sup> <a name="gpuInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpuInput"></a>

```typescript
public readonly gpuInput: IResolvable | ElastigroupGcpGpu[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>[]

---

##### `healthCheckGracePeriodInput`<sup>Optional</sup> <a name="healthCheckGracePeriodInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriodInput"></a>

```typescript
public readonly healthCheckGracePeriodInput: number;
```

- *Type:* number

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckTypeInput"></a>

```typescript
public readonly healthCheckTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceNamePrefixInput`<sup>Optional</sup> <a name="instanceNamePrefixInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefixInput"></a>

```typescript
public readonly instanceNamePrefixInput: string;
```

- *Type:* string

---

##### `instanceTypesCustomInput`<sup>Optional</sup> <a name="instanceTypesCustomInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustomInput"></a>

```typescript
public readonly instanceTypesCustomInput: IResolvable | ElastigroupGcpInstanceTypesCustom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>[]

---

##### `instanceTypesOndemandInput`<sup>Optional</sup> <a name="instanceTypesOndemandInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemandInput"></a>

```typescript
public readonly instanceTypesOndemandInput: string;
```

- *Type:* string

---

##### `instanceTypesPreemptibleInput`<sup>Optional</sup> <a name="instanceTypesPreemptibleInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptibleInput"></a>

```typescript
public readonly instanceTypesPreemptibleInput: string[];
```

- *Type:* string[]

---

##### `integrationDockerSwarmInput`<sup>Optional</sup> <a name="integrationDockerSwarmInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarmInput"></a>

```typescript
public readonly integrationDockerSwarmInput: ElastigroupGcpIntegrationDockerSwarm;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

---

##### `integrationGkeInput`<sup>Optional</sup> <a name="integrationGkeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGkeInput"></a>

```typescript
public readonly integrationGkeInput: ElastigroupGcpIntegrationGke;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

---

##### `ipForwardingInput`<sup>Optional</sup> <a name="ipForwardingInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwardingInput"></a>

```typescript
public readonly ipForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | ElastigroupGcpLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>[]

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadataInput"></a>

```typescript
public readonly metadataInput: IResolvable | ElastigroupGcpMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>[]

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | ElastigroupGcpNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>[]

---

##### `ondemandCountInput`<sup>Optional</sup> <a name="ondemandCountInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCountInput"></a>

```typescript
public readonly ondemandCountInput: number;
```

- *Type:* number

---

##### `preemptiblePercentageInput`<sup>Optional</sup> <a name="preemptiblePercentageInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentageInput"></a>

```typescript
public readonly preemptiblePercentageInput: number;
```

- *Type:* number

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModelInput"></a>

```typescript
public readonly provisioningModelInput: string;
```

- *Type:* string

---

##### `scalingDownPolicyInput`<sup>Optional</sup> <a name="scalingDownPolicyInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicyInput"></a>

```typescript
public readonly scalingDownPolicyInput: IResolvable | ElastigroupGcpScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>[]

---

##### `scalingUpPolicyInput`<sup>Optional</sup> <a name="scalingUpPolicyInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicyInput"></a>

```typescript
public readonly scalingUpPolicyInput: IResolvable | ElastigroupGcpScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>[]

---

##### `scheduledTaskInput`<sup>Optional</sup> <a name="scheduledTaskInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTaskInput"></a>

```typescript
public readonly scheduledTaskInput: IResolvable | ElastigroupGcpScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `shutdownScriptInput`<sup>Optional</sup> <a name="shutdownScriptInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScriptInput"></a>

```typescript
public readonly shutdownScriptInput: string;
```

- *Type:* string

---

##### `startupScriptInput`<sup>Optional</sup> <a name="startupScriptInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScriptInput"></a>

```typescript
public readonly startupScriptInput: string;
```

- *Type:* string

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: IResolvable | ElastigroupGcpSubnets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `unhealthyDurationInput`<sup>Optional</sup> <a name="unhealthyDurationInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDurationInput"></a>

```typescript
public readonly unhealthyDurationInput: number;
```

- *Type:* number

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

---

##### `fallbackToOndemand`<sup>Required</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemand"></a>

```typescript
public readonly fallbackToOndemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckGracePeriod`<sup>Required</sup> <a name="healthCheckGracePeriod" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: number;
```

- *Type:* number

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceNamePrefix`<sup>Required</sup> <a name="instanceNamePrefix" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefix"></a>

```typescript
public readonly instanceNamePrefix: string;
```

- *Type:* string

---

##### `instanceTypesOndemand`<sup>Required</sup> <a name="instanceTypesOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemand"></a>

```typescript
public readonly instanceTypesOndemand: string;
```

- *Type:* string

---

##### `instanceTypesPreemptible`<sup>Required</sup> <a name="instanceTypesPreemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptible"></a>

```typescript
public readonly instanceTypesPreemptible: string[];
```

- *Type:* string[]

---

##### `ipForwarding`<sup>Required</sup> <a name="ipForwarding" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwarding"></a>

```typescript
public readonly ipForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ondemandCount`<sup>Required</sup> <a name="ondemandCount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCount"></a>

```typescript
public readonly ondemandCount: number;
```

- *Type:* number

---

##### `preemptiblePercentage`<sup>Required</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentage"></a>

```typescript
public readonly preemptiblePercentage: number;
```

- *Type:* number

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `shutdownScript`<sup>Required</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScript"></a>

```typescript
public readonly shutdownScript: string;
```

- *Type:* string

---

##### `startupScript`<sup>Required</sup> <a name="startupScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScript"></a>

```typescript
public readonly startupScript: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `unhealthyDuration`<sup>Required</sup> <a name="unhealthyDuration" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDuration"></a>

```typescript
public readonly unhealthyDuration: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupGcpBackendServices <a name="ElastigroupGcpBackendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpBackendServices: elastigroupGcp.ElastigroupGcpBackendServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#service_name ElastigroupGcp#service_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.locationType">locationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#location_type ElastigroupGcp#location_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.namedPorts">namedPorts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>[]</code> | named_ports block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#scheme ElastigroupGcp#scheme}. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#service_name ElastigroupGcp#service_name}.

---

##### `locationType`<sup>Optional</sup> <a name="locationType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#location_type ElastigroupGcp#location_type}.

---

##### `namedPorts`<sup>Optional</sup> <a name="namedPorts" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.namedPorts"></a>

```typescript
public readonly namedPorts: IResolvable | ElastigroupGcpBackendServicesNamedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>[]

named_ports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#named_ports ElastigroupGcp#named_ports}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#scheme ElastigroupGcp#scheme}.

---

### ElastigroupGcpBackendServicesNamedPorts <a name="ElastigroupGcpBackendServicesNamedPorts" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpBackendServicesNamedPorts: elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.ports">ports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ports ElastigroupGcp#ports}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ports ElastigroupGcp#ports}.

---

### ElastigroupGcpConfig <a name="ElastigroupGcpConfig" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpConfig: elastigroupGcp.ElastigroupGcpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#desired_capacity ElastigroupGcp#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#auto_healing ElastigroupGcp#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#availability_zones ElastigroupGcp#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.backendServices">backendServices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>[]</code> | backend_services block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#description ElastigroupGcp#description}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.disk">disk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>[]</code> | disk block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#draining_timeout ElastigroupGcp#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#fallback_to_ondemand ElastigroupGcp#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.gpu">gpu</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>[]</code> | gpu block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#health_check_grace_period ElastigroupGcp#health_check_grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#health_check_type ElastigroupGcp#health_check_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#id ElastigroupGcp#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceNamePrefix">instanceNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#instance_name_prefix ElastigroupGcp#instance_name_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesCustom">instanceTypesCustom</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>[]</code> | instance_types_custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesOndemand">instanceTypesOndemand</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#instance_types_ondemand ElastigroupGcp#instance_types_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesPreemptible">instanceTypesPreemptible</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#instance_types_preemptible ElastigroupGcp#instance_types_preemptible}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationDockerSwarm">integrationDockerSwarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a></code> | integration_docker_swarm block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationGke">integrationGke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a></code> | integration_gke block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ipForwarding">ipForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ip_forwarding ElastigroupGcp#ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.maxSize">maxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#max_size ElastigroupGcp#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.metadata">metadata</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>[]</code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#min_size ElastigroupGcp#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ondemandCount">ondemandCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ondemand_count ElastigroupGcp#ondemand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#preemptible_percentage ElastigroupGcp#preemptible_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#provisioning_model ElastigroupGcp#provisioning_model}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingDownPolicy">scalingDownPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>[]</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingUpPolicy">scalingUpPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>[]</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scheduledTask">scheduledTask</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>[]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#service_account ElastigroupGcp#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.shutdownScript">shutdownScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#shutdown_script ElastigroupGcp#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.startupScript">startupScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#startup_script ElastigroupGcp#startup_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.subnets">subnets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>[]</code> | subnets block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#tags ElastigroupGcp#tags}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.unhealthyDuration">unhealthyDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#unhealthy_duration ElastigroupGcp#unhealthy_duration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#desired_capacity ElastigroupGcp#desired_capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#auto_healing ElastigroupGcp#auto_healing}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#availability_zones ElastigroupGcp#availability_zones}.

---

##### `backendServices`<sup>Optional</sup> <a name="backendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.backendServices"></a>

```typescript
public readonly backendServices: IResolvable | ElastigroupGcpBackendServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>[]

backend_services block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#backend_services ElastigroupGcp#backend_services}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#description ElastigroupGcp#description}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.disk"></a>

```typescript
public readonly disk: IResolvable | ElastigroupGcpDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>[]

disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#disk ElastigroupGcp#disk}

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#draining_timeout ElastigroupGcp#draining_timeout}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.fallbackToOndemand"></a>

```typescript
public readonly fallbackToOndemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#fallback_to_ondemand ElastigroupGcp#fallback_to_ondemand}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.gpu"></a>

```typescript
public readonly gpu: IResolvable | ElastigroupGcpGpu[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>[]

gpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#gpu ElastigroupGcp#gpu}

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#health_check_grace_period ElastigroupGcp#health_check_grace_period}.

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#health_check_type ElastigroupGcp#health_check_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#id ElastigroupGcp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceNamePrefix`<sup>Optional</sup> <a name="instanceNamePrefix" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceNamePrefix"></a>

```typescript
public readonly instanceNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#instance_name_prefix ElastigroupGcp#instance_name_prefix}.

---

##### `instanceTypesCustom`<sup>Optional</sup> <a name="instanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesCustom"></a>

```typescript
public readonly instanceTypesCustom: IResolvable | ElastigroupGcpInstanceTypesCustom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>[]

instance_types_custom block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#instance_types_custom ElastigroupGcp#instance_types_custom}

---

##### `instanceTypesOndemand`<sup>Optional</sup> <a name="instanceTypesOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesOndemand"></a>

```typescript
public readonly instanceTypesOndemand: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#instance_types_ondemand ElastigroupGcp#instance_types_ondemand}.

---

##### `instanceTypesPreemptible`<sup>Optional</sup> <a name="instanceTypesPreemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesPreemptible"></a>

```typescript
public readonly instanceTypesPreemptible: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#instance_types_preemptible ElastigroupGcp#instance_types_preemptible}.

---

##### `integrationDockerSwarm`<sup>Optional</sup> <a name="integrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationDockerSwarm"></a>

```typescript
public readonly integrationDockerSwarm: ElastigroupGcpIntegrationDockerSwarm;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

integration_docker_swarm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#integration_docker_swarm ElastigroupGcp#integration_docker_swarm}

---

##### `integrationGke`<sup>Optional</sup> <a name="integrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationGke"></a>

```typescript
public readonly integrationGke: ElastigroupGcpIntegrationGke;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

integration_gke block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#integration_gke ElastigroupGcp#integration_gke}

---

##### `ipForwarding`<sup>Optional</sup> <a name="ipForwarding" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ipForwarding"></a>

```typescript
public readonly ipForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ip_forwarding ElastigroupGcp#ip_forwarding}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | ElastigroupGcpLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#labels ElastigroupGcp#labels}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#max_size ElastigroupGcp#max_size}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.metadata"></a>

```typescript
public readonly metadata: IResolvable | ElastigroupGcpMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>[]

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#metadata ElastigroupGcp#metadata}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#min_size ElastigroupGcp#min_size}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | ElastigroupGcpNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#network_interface ElastigroupGcp#network_interface}

---

##### `ondemandCount`<sup>Optional</sup> <a name="ondemandCount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ondemandCount"></a>

```typescript
public readonly ondemandCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ondemand_count ElastigroupGcp#ondemand_count}.

---

##### `preemptiblePercentage`<sup>Optional</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.preemptiblePercentage"></a>

```typescript
public readonly preemptiblePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#preemptible_percentage ElastigroupGcp#preemptible_percentage}.

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#provisioning_model ElastigroupGcp#provisioning_model}.

---

##### `scalingDownPolicy`<sup>Optional</sup> <a name="scalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingDownPolicy"></a>

```typescript
public readonly scalingDownPolicy: IResolvable | ElastigroupGcpScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>[]

scaling_down_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#scaling_down_policy ElastigroupGcp#scaling_down_policy}

---

##### `scalingUpPolicy`<sup>Optional</sup> <a name="scalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingUpPolicy"></a>

```typescript
public readonly scalingUpPolicy: IResolvable | ElastigroupGcpScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>[]

scaling_up_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#scaling_up_policy ElastigroupGcp#scaling_up_policy}

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scheduledTask"></a>

```typescript
public readonly scheduledTask: IResolvable | ElastigroupGcpScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>[]

scheduled_task block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#scheduled_task ElastigroupGcp#scheduled_task}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#service_account ElastigroupGcp#service_account}.

---

##### `shutdownScript`<sup>Optional</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.shutdownScript"></a>

```typescript
public readonly shutdownScript: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#shutdown_script ElastigroupGcp#shutdown_script}.

---

##### `startupScript`<sup>Optional</sup> <a name="startupScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.startupScript"></a>

```typescript
public readonly startupScript: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#startup_script ElastigroupGcp#startup_script}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.subnets"></a>

```typescript
public readonly subnets: IResolvable | ElastigroupGcpSubnets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>[]

subnets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#subnets ElastigroupGcp#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#tags ElastigroupGcp#tags}.

---

##### `unhealthyDuration`<sup>Optional</sup> <a name="unhealthyDuration" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.unhealthyDuration"></a>

```typescript
public readonly unhealthyDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#unhealthy_duration ElastigroupGcp#unhealthy_duration}.

---

### ElastigroupGcpDisk <a name="ElastigroupGcpDisk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpDisk: elastigroupGcp.ElastigroupGcpDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.autoDelete">autoDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#auto_delete ElastigroupGcp#auto_delete}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.boot">boot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#boot ElastigroupGcp#boot}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#device_name ElastigroupGcp#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.initializeParams">initializeParams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>[]</code> | initialize_params block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.interface">interface</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#interface ElastigroupGcp#interface}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#mode ElastigroupGcp#mode}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source ElastigroupGcp#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#type ElastigroupGcp#type}. |

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#auto_delete ElastigroupGcp#auto_delete}.

---

##### `boot`<sup>Optional</sup> <a name="boot" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.boot"></a>

```typescript
public readonly boot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#boot ElastigroupGcp#boot}.

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#device_name ElastigroupGcp#device_name}.

---

##### `initializeParams`<sup>Optional</sup> <a name="initializeParams" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.initializeParams"></a>

```typescript
public readonly initializeParams: IResolvable | ElastigroupGcpDiskInitializeParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>[]

initialize_params block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#initialize_params ElastigroupGcp#initialize_params}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#interface ElastigroupGcp#interface}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#mode ElastigroupGcp#mode}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source ElastigroupGcp#source}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#type ElastigroupGcp#type}.

---

### ElastigroupGcpDiskInitializeParams <a name="ElastigroupGcpDiskInitializeParams" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpDiskInitializeParams: elastigroupGcp.ElastigroupGcpDiskInitializeParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.sourceImage">sourceImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source_image ElastigroupGcp#source_image}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#disk_size_gb ElastigroupGcp#disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskType">diskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#disk_type ElastigroupGcp#disk_type}. |

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source_image ElastigroupGcp#source_image}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#disk_size_gb ElastigroupGcp#disk_size_gb}.

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#disk_type ElastigroupGcp#disk_type}.

---

### ElastigroupGcpGpu <a name="ElastigroupGcpGpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpGpu: elastigroupGcp.ElastigroupGcpGpu = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#count ElastigroupGcp#count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#type ElastigroupGcp#type}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#count ElastigroupGcp#count}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#type ElastigroupGcp#type}.

---

### ElastigroupGcpInstanceTypesCustom <a name="ElastigroupGcpInstanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpInstanceTypesCustom: elastigroupGcp.ElastigroupGcpInstanceTypesCustom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.memoryGib">memoryGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#memory_gib ElastigroupGcp#memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.vcpu">vcpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#vcpu ElastigroupGcp#vcpu}. |

---

##### `memoryGib`<sup>Required</sup> <a name="memoryGib" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.memoryGib"></a>

```typescript
public readonly memoryGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#memory_gib ElastigroupGcp#memory_gib}.

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.vcpu"></a>

```typescript
public readonly vcpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#vcpu ElastigroupGcp#vcpu}.

---

### ElastigroupGcpIntegrationDockerSwarm <a name="ElastigroupGcpIntegrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpIntegrationDockerSwarm: elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterHost">masterHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#master_host ElastigroupGcp#master_host}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterPort">masterPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#master_port ElastigroupGcp#master_port}. |

---

##### `masterHost`<sup>Required</sup> <a name="masterHost" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterHost"></a>

```typescript
public readonly masterHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#master_host ElastigroupGcp#master_host}.

---

##### `masterPort`<sup>Required</sup> <a name="masterPort" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterPort"></a>

```typescript
public readonly masterPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#master_port ElastigroupGcp#master_port}.

---

### ElastigroupGcpIntegrationGke <a name="ElastigroupGcpIntegrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpIntegrationGke: elastigroupGcp.ElastigroupGcpIntegrationGke = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleCooldown">autoscaleCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_cooldown ElastigroupGcp#autoscale_cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsAutoConfig">autoscaleIsAutoConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_is_auto_config ElastigroupGcp#autoscale_is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_is_enabled ElastigroupGcp#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleLabels">autoscaleLabels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>[]</code> | autoscale_labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoUpdate">autoUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#auto_update ElastigroupGcp#auto_update}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cluster_id ElastigroupGcp#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#location ElastigroupGcp#location}. |

---

##### `autoscaleCooldown`<sup>Optional</sup> <a name="autoscaleCooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleCooldown"></a>

```typescript
public readonly autoscaleCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_cooldown ElastigroupGcp#autoscale_cooldown}.

---

##### `autoscaleDown`<sup>Optional</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleDown"></a>

```typescript
public readonly autoscaleDown: ElastigroupGcpIntegrationGkeAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_down ElastigroupGcp#autoscale_down}

---

##### `autoscaleHeadroom`<sup>Optional</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleHeadroom"></a>

```typescript
public readonly autoscaleHeadroom: ElastigroupGcpIntegrationGkeAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_headroom ElastigroupGcp#autoscale_headroom}

---

##### `autoscaleIsAutoConfig`<sup>Optional</sup> <a name="autoscaleIsAutoConfig" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsAutoConfig"></a>

```typescript
public readonly autoscaleIsAutoConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_is_auto_config ElastigroupGcp#autoscale_is_auto_config}.

---

##### `autoscaleIsEnabled`<sup>Optional</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsEnabled"></a>

```typescript
public readonly autoscaleIsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_is_enabled ElastigroupGcp#autoscale_is_enabled}.

---

##### `autoscaleLabels`<sup>Optional</sup> <a name="autoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleLabels"></a>

```typescript
public readonly autoscaleLabels: IResolvable | ElastigroupGcpIntegrationGkeAutoscaleLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>[]

autoscale_labels block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_labels ElastigroupGcp#autoscale_labels}

---

##### `autoUpdate`<sup>Optional</sup> <a name="autoUpdate" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#auto_update ElastigroupGcp#auto_update}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cluster_id ElastigroupGcp#cluster_id}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#location ElastigroupGcp#location}.

---

### ElastigroupGcpIntegrationGkeAutoscaleDown <a name="ElastigroupGcpIntegrationGkeAutoscaleDown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpIntegrationGkeAutoscaleDown: elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}. |

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}.

---

### ElastigroupGcpIntegrationGkeAutoscaleHeadroom <a name="ElastigroupGcpIntegrationGkeAutoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpIntegrationGkeAutoscaleHeadroom: elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cpu_per_unit ElastigroupGcp#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#memory_per_unit ElastigroupGcp#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#num_of_units ElastigroupGcp#num_of_units}. |

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cpu_per_unit ElastigroupGcp#cpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#memory_per_unit ElastigroupGcp#memory_per_unit}.

---

##### `numOfUnits`<sup>Optional</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#num_of_units ElastigroupGcp#num_of_units}.

---

### ElastigroupGcpIntegrationGkeAutoscaleLabels <a name="ElastigroupGcpIntegrationGkeAutoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpIntegrationGkeAutoscaleLabels: elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#key ElastigroupGcp#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#key ElastigroupGcp#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpLabels <a name="ElastigroupGcpLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpLabels: elastigroupGcp.ElastigroupGcpLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#key ElastigroupGcp#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#key ElastigroupGcp#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpMetadata <a name="ElastigroupGcpMetadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpMetadata: elastigroupGcp.ElastigroupGcpMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#key ElastigroupGcp#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#key ElastigroupGcp#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpNetworkInterface <a name="ElastigroupGcpNetworkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpNetworkInterface: elastigroupGcp.ElastigroupGcpNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.network">network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#network ElastigroupGcp#network}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.accessConfigs">accessConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>[]</code> | access_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.aliasIpRanges">aliasIpRanges</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>[]</code> | alias_ip_ranges block. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#network ElastigroupGcp#network}.

---

##### `accessConfigs`<sup>Optional</sup> <a name="accessConfigs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.accessConfigs"></a>

```typescript
public readonly accessConfigs: IResolvable | ElastigroupGcpNetworkInterfaceAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>[]

access_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#access_configs ElastigroupGcp#access_configs}

---

##### `aliasIpRanges`<sup>Optional</sup> <a name="aliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.aliasIpRanges"></a>

```typescript
public readonly aliasIpRanges: IResolvable | ElastigroupGcpNetworkInterfaceAliasIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>[]

alias_ip_ranges block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#alias_ip_ranges ElastigroupGcp#alias_ip_ranges}

---

### ElastigroupGcpNetworkInterfaceAccessConfigs <a name="ElastigroupGcpNetworkInterfaceAccessConfigs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpNetworkInterfaceAccessConfigs: elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#type ElastigroupGcp#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#type ElastigroupGcp#type}.

---

### ElastigroupGcpNetworkInterfaceAliasIpRanges <a name="ElastigroupGcpNetworkInterfaceAliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpNetworkInterfaceAliasIpRanges: elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ip_cidr_range ElastigroupGcp#ip_cidr_range}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#subnetwork_range_name ElastigroupGcp#subnetwork_range_name}. |

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ip_cidr_range ElastigroupGcp#ip_cidr_range}.

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#subnetwork_range_name ElastigroupGcp#subnetwork_range_name}.

---

### ElastigroupGcpScalingDownPolicy <a name="ElastigroupGcpScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpScalingDownPolicy: elastigroupGcp.ElastigroupGcpScalingDownPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#namespace ElastigroupGcp#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#threshold ElastigroupGcp#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#unit ElastigroupGcp#unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#action_type ElastigroupGcp#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>[]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#operator ElastigroupGcp#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#period ElastigroupGcp#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source ElastigroupGcp#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#statistic ElastigroupGcp#statistic}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#namespace ElastigroupGcp#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#threshold ElastigroupGcp#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#unit ElastigroupGcp#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#action_type ElastigroupGcp#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.adjustment"></a>

```typescript
public readonly adjustment: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | ElastigroupGcpScalingDownPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>[]

dimensions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#dimensions ElastigroupGcp#dimensions}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#operator ElastigroupGcp#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#period ElastigroupGcp#period}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source ElastigroupGcp#source}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#statistic ElastigroupGcp#statistic}.

---

### ElastigroupGcpScalingDownPolicyDimensions <a name="ElastigroupGcpScalingDownPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpScalingDownPolicyDimensions: elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpScalingUpPolicy <a name="ElastigroupGcpScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpScalingUpPolicy: elastigroupGcp.ElastigroupGcpScalingUpPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#namespace ElastigroupGcp#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#threshold ElastigroupGcp#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#unit ElastigroupGcp#unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#action_type ElastigroupGcp#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>[]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#operator ElastigroupGcp#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#period ElastigroupGcp#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source ElastigroupGcp#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#statistic ElastigroupGcp#statistic}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#namespace ElastigroupGcp#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#threshold ElastigroupGcp#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#unit ElastigroupGcp#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#action_type ElastigroupGcp#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.adjustment"></a>

```typescript
public readonly adjustment: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | ElastigroupGcpScalingUpPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>[]

dimensions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#dimensions ElastigroupGcp#dimensions}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#operator ElastigroupGcp#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#period ElastigroupGcp#period}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source ElastigroupGcp#source}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#statistic ElastigroupGcp#statistic}.

---

### ElastigroupGcpScalingUpPolicyDimensions <a name="ElastigroupGcpScalingUpPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpScalingUpPolicyDimensions: elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpScheduledTask <a name="ElastigroupGcpScheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpScheduledTask: elastigroupGcp.ElastigroupGcpScheduledTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.taskType">taskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#task_type ElastigroupGcp#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cron_expression ElastigroupGcp#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#is_enabled ElastigroupGcp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.maxCapacity">maxCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#max_capacity ElastigroupGcp#max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.minCapacity">minCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#min_capacity ElastigroupGcp#min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.targetCapacity">targetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#target_capacity ElastigroupGcp#target_capacity}. |

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#task_type ElastigroupGcp#task_type}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cron_expression ElastigroupGcp#cron_expression}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#is_enabled ElastigroupGcp#is_enabled}.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#max_capacity ElastigroupGcp#max_capacity}.

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.minCapacity"></a>

```typescript
public readonly minCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#min_capacity ElastigroupGcp#min_capacity}.

---

##### `targetCapacity`<sup>Optional</sup> <a name="targetCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.targetCapacity"></a>

```typescript
public readonly targetCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#target_capacity ElastigroupGcp#target_capacity}.

---

### ElastigroupGcpSubnets <a name="ElastigroupGcpSubnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

const elastigroupGcpSubnets: elastigroupGcp.ElastigroupGcpSubnets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#region ElastigroupGcp#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.subnetNames">subnetNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#subnet_names ElastigroupGcp#subnet_names}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#region ElastigroupGcp#region}.

---

##### `subnetNames`<sup>Required</sup> <a name="subnetNames" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.subnetNames"></a>

```typescript
public readonly subnetNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#subnet_names ElastigroupGcp#subnet_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupGcpBackendServicesList <a name="ElastigroupGcpBackendServicesList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpBackendServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.get"></a>

```typescript
public get(index: number): ElastigroupGcpBackendServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpBackendServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>[]

---


### ElastigroupGcpBackendServicesNamedPortsList <a name="ElastigroupGcpBackendServicesNamedPortsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.get"></a>

```typescript
public get(index: number): ElastigroupGcpBackendServicesNamedPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpBackendServicesNamedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>[]

---


### ElastigroupGcpBackendServicesNamedPortsOutputReference <a name="ElastigroupGcpBackendServicesNamedPortsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpBackendServicesNamedPorts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a> | cdktf.IResolvable

---


### ElastigroupGcpBackendServicesOutputReference <a name="ElastigroupGcpBackendServicesOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpBackendServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.putNamedPorts">putNamedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetLocationType">resetLocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetNamedPorts">resetNamedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamedPorts` <a name="putNamedPorts" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.putNamedPorts"></a>

```typescript
public putNamedPorts(value: IResolvable | ElastigroupGcpBackendServicesNamedPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.putNamedPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>[]

---

##### `resetLocationType` <a name="resetLocationType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetLocationType"></a>

```typescript
public resetLocationType(): void
```

##### `resetNamedPorts` <a name="resetNamedPorts" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetNamedPorts"></a>

```typescript
public resetNamedPorts(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPorts">namedPorts</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList">ElastigroupGcpBackendServicesNamedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPortsInput">namedPortsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationType">locationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namedPorts`<sup>Required</sup> <a name="namedPorts" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPorts"></a>

```typescript
public readonly namedPorts: ElastigroupGcpBackendServicesNamedPortsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList">ElastigroupGcpBackendServicesNamedPortsList</a>

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationTypeInput"></a>

```typescript
public readonly locationTypeInput: string;
```

- *Type:* string

---

##### `namedPortsInput`<sup>Optional</sup> <a name="namedPortsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPortsInput"></a>

```typescript
public readonly namedPortsInput: IResolvable | ElastigroupGcpBackendServicesNamedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>[]

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpBackendServices | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a> | cdktf.IResolvable

---


### ElastigroupGcpDiskInitializeParamsList <a name="ElastigroupGcpDiskInitializeParamsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpDiskInitializeParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.get"></a>

```typescript
public get(index: number): ElastigroupGcpDiskInitializeParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpDiskInitializeParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>[]

---


### ElastigroupGcpDiskInitializeParamsOutputReference <a name="ElastigroupGcpDiskInitializeParamsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImageInput">sourceImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImage">sourceImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: string;
```

- *Type:* string

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImageInput"></a>

```typescript
public readonly sourceImageInput: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpDiskInitializeParams | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a> | cdktf.IResolvable

---


### ElastigroupGcpDiskList <a name="ElastigroupGcpDiskList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.get"></a>

```typescript
public get(index: number): ElastigroupGcpDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>[]

---


### ElastigroupGcpDiskOutputReference <a name="ElastigroupGcpDiskOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.putInitializeParams">putInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetBoot">resetBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInitializeParams">resetInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInitializeParams` <a name="putInitializeParams" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.putInitializeParams"></a>

```typescript
public putInitializeParams(value: IResolvable | ElastigroupGcpDiskInitializeParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.putInitializeParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>[]

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetAutoDelete"></a>

```typescript
public resetAutoDelete(): void
```

##### `resetBoot` <a name="resetBoot" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetBoot"></a>

```typescript
public resetBoot(): void
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetInitializeParams` <a name="resetInitializeParams" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInitializeParams"></a>

```typescript
public resetInitializeParams(): void
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInterface"></a>

```typescript
public resetInterface(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParams">initializeParams</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList">ElastigroupGcpDiskInitializeParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.bootInput">bootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParamsInput">initializeParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDelete">autoDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.boot">boot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initializeParams`<sup>Required</sup> <a name="initializeParams" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParams"></a>

```typescript
public readonly initializeParams: ElastigroupGcpDiskInitializeParamsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList">ElastigroupGcpDiskInitializeParamsList</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDeleteInput"></a>

```typescript
public readonly autoDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bootInput`<sup>Optional</sup> <a name="bootInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.bootInput"></a>

```typescript
public readonly bootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `initializeParamsInput`<sup>Optional</sup> <a name="initializeParamsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParamsInput"></a>

```typescript
public readonly initializeParamsInput: IResolvable | ElastigroupGcpDiskInitializeParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>[]

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.boot"></a>

```typescript
public readonly boot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpDisk | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a> | cdktf.IResolvable

---


### ElastigroupGcpGpuList <a name="ElastigroupGcpGpuList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpGpuList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.get"></a>

```typescript
public get(index: number): ElastigroupGcpGpuOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpGpu[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>[]

---


### ElastigroupGcpGpuOutputReference <a name="ElastigroupGcpGpuOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpGpuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpGpu | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a> | cdktf.IResolvable

---


### ElastigroupGcpInstanceTypesCustomList <a name="ElastigroupGcpInstanceTypesCustomList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpInstanceTypesCustomList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.get"></a>

```typescript
public get(index: number): ElastigroupGcpInstanceTypesCustomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpInstanceTypesCustom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>[]

---


### ElastigroupGcpInstanceTypesCustomOutputReference <a name="ElastigroupGcpInstanceTypesCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGibInput">memoryGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpuInput">vcpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGib">memoryGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpu">vcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryGibInput`<sup>Optional</sup> <a name="memoryGibInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGibInput"></a>

```typescript
public readonly memoryGibInput: number;
```

- *Type:* number

---

##### `vcpuInput`<sup>Optional</sup> <a name="vcpuInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpuInput"></a>

```typescript
public readonly vcpuInput: number;
```

- *Type:* number

---

##### `memoryGib`<sup>Required</sup> <a name="memoryGib" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGib"></a>

```typescript
public readonly memoryGib: number;
```

- *Type:* number

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpu"></a>

```typescript
public readonly vcpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpInstanceTypesCustom | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a> | cdktf.IResolvable

---


### ElastigroupGcpIntegrationDockerSwarmOutputReference <a name="ElastigroupGcpIntegrationDockerSwarmOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHostInput">masterHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPortInput">masterPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHost">masterHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPort">masterPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `masterHostInput`<sup>Optional</sup> <a name="masterHostInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHostInput"></a>

```typescript
public readonly masterHostInput: string;
```

- *Type:* string

---

##### `masterPortInput`<sup>Optional</sup> <a name="masterPortInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPortInput"></a>

```typescript
public readonly masterPortInput: number;
```

- *Type:* number

---

##### `masterHost`<sup>Required</sup> <a name="masterHost" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHost"></a>

```typescript
public readonly masterHost: string;
```

- *Type:* string

---

##### `masterPort`<sup>Required</sup> <a name="masterPort" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPort"></a>

```typescript
public readonly masterPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpIntegrationDockerSwarm;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

---


### ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference <a name="ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpIntegrationGkeAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

---


### ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference <a name="ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetNumOfUnits">resetNumOfUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```typescript
public resetCpuPerUnit(): void
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```typescript
public resetMemoryPerUnit(): void
```

##### `resetNumOfUnits` <a name="resetNumOfUnits" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetNumOfUnits"></a>

```typescript
public resetNumOfUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```typescript
public readonly cpuPerUnitInput: number;
```

- *Type:* number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```typescript
public readonly memoryPerUnitInput: number;
```

- *Type:* number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```typescript
public readonly numOfUnitsInput: number;
```

- *Type:* number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpIntegrationGkeAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

---


### ElastigroupGcpIntegrationGkeAutoscaleLabelsList <a name="ElastigroupGcpIntegrationGkeAutoscaleLabelsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.get"></a>

```typescript
public get(index: number): ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpIntegrationGkeAutoscaleLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>[]

---


### ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference <a name="ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpIntegrationGkeAutoscaleLabels | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a> | cdktf.IResolvable

---


### ElastigroupGcpIntegrationGkeOutputReference <a name="ElastigroupGcpIntegrationGkeOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleDown">putAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleHeadroom">putAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleLabels">putAutoscaleLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleCooldown">resetAutoscaleCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleDown">resetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleHeadroom">resetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsAutoConfig">resetAutoscaleIsAutoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsEnabled">resetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleLabels">resetAutoscaleLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoUpdate">resetAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscaleDown` <a name="putAutoscaleDown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleDown"></a>

```typescript
public putAutoscaleDown(value: ElastigroupGcpIntegrationGkeAutoscaleDown): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

---

##### `putAutoscaleHeadroom` <a name="putAutoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleHeadroom"></a>

```typescript
public putAutoscaleHeadroom(value: ElastigroupGcpIntegrationGkeAutoscaleHeadroom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

---

##### `putAutoscaleLabels` <a name="putAutoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleLabels"></a>

```typescript
public putAutoscaleLabels(value: IResolvable | ElastigroupGcpIntegrationGkeAutoscaleLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>[]

---

##### `resetAutoscaleCooldown` <a name="resetAutoscaleCooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleCooldown"></a>

```typescript
public resetAutoscaleCooldown(): void
```

##### `resetAutoscaleDown` <a name="resetAutoscaleDown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleDown"></a>

```typescript
public resetAutoscaleDown(): void
```

##### `resetAutoscaleHeadroom` <a name="resetAutoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleHeadroom"></a>

```typescript
public resetAutoscaleHeadroom(): void
```

##### `resetAutoscaleIsAutoConfig` <a name="resetAutoscaleIsAutoConfig" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsAutoConfig"></a>

```typescript
public resetAutoscaleIsAutoConfig(): void
```

##### `resetAutoscaleIsEnabled` <a name="resetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsEnabled"></a>

```typescript
public resetAutoscaleIsEnabled(): void
```

##### `resetAutoscaleLabels` <a name="resetAutoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleLabels"></a>

```typescript
public resetAutoscaleLabels(): void
```

##### `resetAutoUpdate` <a name="resetAutoUpdate" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoUpdate"></a>

```typescript
public resetAutoUpdate(): void
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference">ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference">ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabels">autoscaleLabels</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList">ElastigroupGcpIntegrationGkeAutoscaleLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldownInput">autoscaleCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDownInput">autoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroomInput">autoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfigInput">autoscaleIsAutoConfigInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabledInput">autoscaleIsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabelsInput">autoscaleLabelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdateInput">autoUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldown">autoscaleCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfig">autoscaleIsAutoConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdate">autoUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscaleDown`<sup>Required</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDown"></a>

```typescript
public readonly autoscaleDown: ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference">ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference</a>

---

##### `autoscaleHeadroom`<sup>Required</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroom"></a>

```typescript
public readonly autoscaleHeadroom: ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference">ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference</a>

---

##### `autoscaleLabels`<sup>Required</sup> <a name="autoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabels"></a>

```typescript
public readonly autoscaleLabels: ElastigroupGcpIntegrationGkeAutoscaleLabelsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList">ElastigroupGcpIntegrationGkeAutoscaleLabelsList</a>

---

##### `autoscaleCooldownInput`<sup>Optional</sup> <a name="autoscaleCooldownInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldownInput"></a>

```typescript
public readonly autoscaleCooldownInput: number;
```

- *Type:* number

---

##### `autoscaleDownInput`<sup>Optional</sup> <a name="autoscaleDownInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDownInput"></a>

```typescript
public readonly autoscaleDownInput: ElastigroupGcpIntegrationGkeAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

---

##### `autoscaleHeadroomInput`<sup>Optional</sup> <a name="autoscaleHeadroomInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroomInput"></a>

```typescript
public readonly autoscaleHeadroomInput: ElastigroupGcpIntegrationGkeAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

---

##### `autoscaleIsAutoConfigInput`<sup>Optional</sup> <a name="autoscaleIsAutoConfigInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfigInput"></a>

```typescript
public readonly autoscaleIsAutoConfigInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoscaleIsEnabledInput`<sup>Optional</sup> <a name="autoscaleIsEnabledInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabledInput"></a>

```typescript
public readonly autoscaleIsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoscaleLabelsInput`<sup>Optional</sup> <a name="autoscaleLabelsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabelsInput"></a>

```typescript
public readonly autoscaleLabelsInput: IResolvable | ElastigroupGcpIntegrationGkeAutoscaleLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>[]

---

##### `autoUpdateInput`<sup>Optional</sup> <a name="autoUpdateInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdateInput"></a>

```typescript
public readonly autoUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `autoscaleCooldown`<sup>Required</sup> <a name="autoscaleCooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldown"></a>

```typescript
public readonly autoscaleCooldown: number;
```

- *Type:* number

---

##### `autoscaleIsAutoConfig`<sup>Required</sup> <a name="autoscaleIsAutoConfig" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfig"></a>

```typescript
public readonly autoscaleIsAutoConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoscaleIsEnabled`<sup>Required</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabled"></a>

```typescript
public readonly autoscaleIsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpIntegrationGke;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

---


### ElastigroupGcpLabelsList <a name="ElastigroupGcpLabelsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.get"></a>

```typescript
public get(index: number): ElastigroupGcpLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>[]

---


### ElastigroupGcpLabelsOutputReference <a name="ElastigroupGcpLabelsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpLabels | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a> | cdktf.IResolvable

---


### ElastigroupGcpMetadataList <a name="ElastigroupGcpMetadataList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.get"></a>

```typescript
public get(index: number): ElastigroupGcpMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>[]

---


### ElastigroupGcpMetadataOutputReference <a name="ElastigroupGcpMetadataOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpMetadata | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a> | cdktf.IResolvable

---


### ElastigroupGcpNetworkInterfaceAccessConfigsList <a name="ElastigroupGcpNetworkInterfaceAccessConfigsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.get"></a>

```typescript
public get(index: number): ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpNetworkInterfaceAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>[]

---


### ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference <a name="ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpNetworkInterfaceAccessConfigs | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a> | cdktf.IResolvable

---


### ElastigroupGcpNetworkInterfaceAliasIpRangesList <a name="ElastigroupGcpNetworkInterfaceAliasIpRangesList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.get"></a>

```typescript
public get(index: number): ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpNetworkInterfaceAliasIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>[]

---


### ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference <a name="ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeNameInput">subnetworkRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `subnetworkRangeNameInput`<sup>Optional</sup> <a name="subnetworkRangeNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeNameInput"></a>

```typescript
public readonly subnetworkRangeNameInput: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpNetworkInterfaceAliasIpRanges | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a> | cdktf.IResolvable

---


### ElastigroupGcpNetworkInterfaceList <a name="ElastigroupGcpNetworkInterfaceList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.get"></a>

```typescript
public get(index: number): ElastigroupGcpNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>[]

---


### ElastigroupGcpNetworkInterfaceOutputReference <a name="ElastigroupGcpNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAccessConfigs">putAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAliasIpRanges">putAliasIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAccessConfigs">resetAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAliasIpRanges">resetAliasIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfigs` <a name="putAccessConfigs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAccessConfigs"></a>

```typescript
public putAccessConfigs(value: IResolvable | ElastigroupGcpNetworkInterfaceAccessConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>[]

---

##### `putAliasIpRanges` <a name="putAliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAliasIpRanges"></a>

```typescript
public putAliasIpRanges(value: IResolvable | ElastigroupGcpNetworkInterfaceAliasIpRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAliasIpRanges.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>[]

---

##### `resetAccessConfigs` <a name="resetAccessConfigs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAccessConfigs"></a>

```typescript
public resetAccessConfigs(): void
```

##### `resetAliasIpRanges` <a name="resetAliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAliasIpRanges"></a>

```typescript
public resetAliasIpRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigs">accessConfigs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList">ElastigroupGcpNetworkInterfaceAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRanges">aliasIpRanges</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList">ElastigroupGcpNetworkInterfaceAliasIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigsInput">accessConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRangesInput">aliasIpRangesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfigs`<sup>Required</sup> <a name="accessConfigs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigs"></a>

```typescript
public readonly accessConfigs: ElastigroupGcpNetworkInterfaceAccessConfigsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList">ElastigroupGcpNetworkInterfaceAccessConfigsList</a>

---

##### `aliasIpRanges`<sup>Required</sup> <a name="aliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRanges"></a>

```typescript
public readonly aliasIpRanges: ElastigroupGcpNetworkInterfaceAliasIpRangesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList">ElastigroupGcpNetworkInterfaceAliasIpRangesList</a>

---

##### `accessConfigsInput`<sup>Optional</sup> <a name="accessConfigsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigsInput"></a>

```typescript
public readonly accessConfigsInput: IResolvable | ElastigroupGcpNetworkInterfaceAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>[]

---

##### `aliasIpRangesInput`<sup>Optional</sup> <a name="aliasIpRangesInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRangesInput"></a>

```typescript
public readonly aliasIpRangesInput: IResolvable | ElastigroupGcpNetworkInterfaceAliasIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>[]

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpNetworkInterface | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a> | cdktf.IResolvable

---


### ElastigroupGcpScalingDownPolicyDimensionsList <a name="ElastigroupGcpScalingDownPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.get"></a>

```typescript
public get(index: number): ElastigroupGcpScalingDownPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpScalingDownPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>[]

---


### ElastigroupGcpScalingDownPolicyDimensionsOutputReference <a name="ElastigroupGcpScalingDownPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpScalingDownPolicyDimensions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a> | cdktf.IResolvable

---


### ElastigroupGcpScalingDownPolicyList <a name="ElastigroupGcpScalingDownPolicyList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpScalingDownPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.get"></a>

```typescript
public get(index: number): ElastigroupGcpScalingDownPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>[]

---


### ElastigroupGcpScalingDownPolicyOutputReference <a name="ElastigroupGcpScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | ElastigroupGcpScalingDownPolicyDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>[]

---

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetAdjustment"></a>

```typescript
public resetAdjustment(): void
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetCooldown"></a>

```typescript
public resetCooldown(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList">ElastigroupGcpScalingDownPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: ElastigroupGcpScalingDownPolicyDimensionsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList">ElastigroupGcpScalingDownPolicyDimensionsList</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```typescript
public readonly adjustmentInput: number;
```

- *Type:* number

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | ElastigroupGcpScalingDownPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>[]

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustment"></a>

```typescript
public readonly adjustment: number;
```

- *Type:* number

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpScalingDownPolicy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a> | cdktf.IResolvable

---


### ElastigroupGcpScalingUpPolicyDimensionsList <a name="ElastigroupGcpScalingUpPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.get"></a>

```typescript
public get(index: number): ElastigroupGcpScalingUpPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpScalingUpPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>[]

---


### ElastigroupGcpScalingUpPolicyDimensionsOutputReference <a name="ElastigroupGcpScalingUpPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpScalingUpPolicyDimensions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a> | cdktf.IResolvable

---


### ElastigroupGcpScalingUpPolicyList <a name="ElastigroupGcpScalingUpPolicyList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpScalingUpPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.get"></a>

```typescript
public get(index: number): ElastigroupGcpScalingUpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>[]

---


### ElastigroupGcpScalingUpPolicyOutputReference <a name="ElastigroupGcpScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | ElastigroupGcpScalingUpPolicyDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>[]

---

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetAdjustment"></a>

```typescript
public resetAdjustment(): void
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetCooldown"></a>

```typescript
public resetCooldown(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList">ElastigroupGcpScalingUpPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: ElastigroupGcpScalingUpPolicyDimensionsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList">ElastigroupGcpScalingUpPolicyDimensionsList</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```typescript
public readonly adjustmentInput: number;
```

- *Type:* number

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | ElastigroupGcpScalingUpPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>[]

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustment"></a>

```typescript
public readonly adjustment: number;
```

- *Type:* number

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpScalingUpPolicy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a> | cdktf.IResolvable

---


### ElastigroupGcpScheduledTaskList <a name="ElastigroupGcpScheduledTaskList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpScheduledTaskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.get"></a>

```typescript
public get(index: number): ElastigroupGcpScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>[]

---


### ElastigroupGcpScheduledTaskOutputReference <a name="ElastigroupGcpScheduledTaskOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetTargetCapacity">resetTargetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetCronExpression"></a>

```typescript
public resetCronExpression(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMinCapacity"></a>

```typescript
public resetMinCapacity(): void
```

##### `resetTargetCapacity` <a name="resetTargetCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetTargetCapacity"></a>

```typescript
public resetTargetCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacityInput">targetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacity">minCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacity">targetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: string;
```

- *Type:* string

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacityInput"></a>

```typescript
public readonly minCapacityInput: string;
```

- *Type:* string

---

##### `targetCapacityInput`<sup>Optional</sup> <a name="targetCapacityInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacityInput"></a>

```typescript
public readonly targetCapacityInput: string;
```

- *Type:* string

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskTypeInput"></a>

```typescript
public readonly taskTypeInput: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: string;
```

- *Type:* string

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacity"></a>

```typescript
public readonly minCapacity: string;
```

- *Type:* string

---

##### `targetCapacity`<sup>Required</sup> <a name="targetCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacity"></a>

```typescript
public readonly targetCapacity: string;
```

- *Type:* string

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpScheduledTask | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a> | cdktf.IResolvable

---


### ElastigroupGcpSubnetsList <a name="ElastigroupGcpSubnetsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpSubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.get"></a>

```typescript
public get(index: number): ElastigroupGcpSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGcpSubnets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>[]

---


### ElastigroupGcpSubnetsOutputReference <a name="ElastigroupGcpSubnetsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer"></a>

```typescript
import { elastigroupGcp } from '@cdktf/provider-spotinst'

new elastigroupGcp.ElastigroupGcpSubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNamesInput">subnetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNames">subnetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `subnetNamesInput`<sup>Optional</sup> <a name="subnetNamesInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNamesInput"></a>

```typescript
public readonly subnetNamesInput: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `subnetNames`<sup>Required</sup> <a name="subnetNames" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNames"></a>

```typescript
public readonly subnetNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGcpSubnets | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a> | cdktf.IResolvable

---



